import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStackCard from "./components/YourStackCard";

import type { Technology } from "./types/datatype";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack.");
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack(stack.filter((item) => item.id !== id));

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div>
      <Nav />
      <Hero />

      <section id="technologies" className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Technologies
          </h2>

          <p className="mt-2 text-gray-600">
            Choose the technologies you want to add to your developer stack.
          </p>

          {loading ? (
            <p className="py-20 text-center text-gray-600">
              Loading technologies...
            </p>
          ) : (
            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={stack.some(
                      (item) => item.id === technology.id
                    )}
                    onAdd={handleAdd}
                  />
                ))}
              </div>

              <YourStackCard
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;