import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";

function App() {
  const [stack, setStack] = useState([]);

  // Add technology
  const handleAddToStack = (technology) => {
    // Duplicate check
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    // One technology per category
    const sameCategory = stack.some(
      (item) => item.category === technology.category,
    );

    if (sameCategory) {
      toast.warning(
        `You can select only one ${technology.category} technology.`,
      );
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

  // Remove everything
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologySection
          onAdd={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
          stack={stack}
        />
      </main>

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
