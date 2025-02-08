import { useState } from "react";
import Filters from "./components/Filters";
import JobList from "./components/jobList";
import data from "./services/data.json";

function App() {
  const [activeFilters, setActiveFilters] = useState([]);

  const filteredJobs =
    activeFilters.length === 0
      ? data
      : data.filter((job) => {
          return activeFilters.every((filter) => {
            if (job.role === filter) return true;
            if (job.level === filter) return true;
            if (job.languages.includes(filter)) return true;
            if (job.tools.includes(filter)) return true;

            return false;
          });
        });

  const addToFilters = (newFilter) => {
    if (activeFilters.includes(newFilter)) {
      return;
    }
    setActiveFilters([...activeFilters, newFilter]);
  };

  const removeFilter = (filter) => {
    setActiveFilters(
      activeFilters.filter((activefilter) => activefilter !== filter)
    );
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  const handleAddFilter = function (e) {
    const filter = e.target.closest(".job-description-label");

    if (!filter) return;

    const selectedFilter = filter.textContent;
    addToFilters(selectedFilter);
  };

  return (
    <>
      <header>
        <h1 className="visually-hidden">Job Listings Page</h1>
      </header>
      <main className="app">
        <Filters
          activeFilters={activeFilters}
          handleClearFilters={clearAllFilters}
          handleRemoveFilter={removeFilter}
        />
        <JobList onAddFilter={handleAddFilter} jobs={filteredJobs} />
      </main>
    </>
  );
}

export default App;
