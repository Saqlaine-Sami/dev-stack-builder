import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";

function App() {
  const [stack, setStack] = useState([]);

  const handleAddToStack = (technology) => {
    setStack((currentStack) => {
      if (currentStack.some((item) => item.id === technology.id)) {
        return currentStack;
      }

      return [...currentStack, technology];
    });
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologySection onAdd={handleAddToStack} stack={stack} />

        <section
          id="projects"
          className="flex min-h-[400px] items-center justify-center"
        >
          <h2 className="text-3xl font-bold">Projects</h2>
        </section>

        <section
          id="about"
          className="flex min-h-[400px] items-center justify-center bg-gray-50"
        >
          <h2 className="text-3xl font-bold">About</h2>
        </section>

        <section
          id="contact"
          className="flex min-h-[400px] items-center justify-center"
        >
          <h2 className="text-3xl font-bold">Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App;
