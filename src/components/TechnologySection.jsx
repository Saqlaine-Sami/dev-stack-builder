import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const TechnologySection = ({ onAdd, onRemove, onRemoveAll, stack }) => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technology data");
        }

        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Technology loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-20"
    >
      <div className="mb-7">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-slate-500 md:text-base">
          Explore, compare, and add technologies to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="flex items-center gap-3 text-slate-500">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-200 border-t-pink-500" />
            <span>Loading technologies...</span>
          </div>
        </div>
      ) : (
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,3fr)_280px]">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={onAdd}
                isAdded={stack.some((item) => item.id === technology.id)}
              />
            ))}
          </div>

          {/* Your Stack */}
          <YourStack
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      )}
    </section>
  );
};

export default TechnologySection;
