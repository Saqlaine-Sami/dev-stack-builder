import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

function App() {
  const [stack, setStack] = useState([]);

  // Add technology to stack
  const handleAddToStack = (technology) => {
    // Prevent duplicate technology
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [...currentStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemove = (technologyId) => {
    const technology = stack.find((item) => item.id === technologyId);

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== technologyId),
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />

        <TechnologySection
          onAdd={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
          stack={stack}
        />
        {/* Projects Section */}
        <section id="projects" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Projects</h2>

          <p className="mt-3 text-slate-500">
            Explore modern development projects built with different technology
            stacks.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
            <h2 className="text-3xl font-bold text-slate-900">
              About Dev Stack
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-500">
              Dev Stack helps developers explore technologies and build a
              suitable development stack for their projects.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
