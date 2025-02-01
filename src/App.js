import { useState } from "react";
import JobCompanyProfile from "./components/companyProfile";
import Filters from "./components/Filters";

function App() {
  const [activeFilters, setActiveFilters] = useState([]);

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

  const isFilterActive = (filter) => {
    return activeFilters.includes(filter);
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="app">
      <Filters
        activeFilters={activeFilters}
        handleClearFilters={clearAllFilters}
        handleRemoveFilter={removeFilter}
      />
      <JobCompanyProfile />

      {/* for Test filters: */}
      <button
        onClick={() => addToFilters("react")}
        className={`${isFilterActive("react") ? "active" : ""}`}
      >
        react
      </button>
      <button
        onClick={() => addToFilters("javaScript")}
        className={`${isFilterActive("javaScript") ? "active" : ""}`}
      >
        javaScript
      </button>
    </div>
  );
}

export default App;
