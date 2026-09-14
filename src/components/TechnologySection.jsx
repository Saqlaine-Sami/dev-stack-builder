import { useEffect, useMemo, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const TechnologySection = ({ onAdd, onRemove, onRemoveAll, stack }) => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch technology data
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

  // Create category list
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(technologies.map((technology) => technology.category)),
    ];

    return ["All", ...uniqueCategories];
  }, [technologies]);

  // Search + category filtering
  const filteredTechnologies = useMemo(() => {
    return technologies.filter((technology) => {
      const matchesSearch = technology.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || technology.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [technologies, searchTerm, selectedCategory]);

  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-20"
    >
      {/* Section Heading */}
      <div className="mb-7">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-slate-500 md:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Search + Category Filter */}
      {!loading && (
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>

            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search technologies..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100 sm:w-52"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Loading */}
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
          <div>
            {filteredTechnologies.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {filteredTechnologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={onAdd}
                    isAdded={stack.some((item) => item.id === technology.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[250px] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50">
                <div className="text-center">
                  <p className="text-lg font-semibold text-slate-700">
                    No technologies found
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Try a different search or category.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="mt-4 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
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
