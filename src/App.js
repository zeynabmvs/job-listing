import { useState } from "react";
import JobCompanyProfile from "./components/companyProfile";
import Filters from "./components/Filters";

function App() {
  const [activeFilters, setActiveFilters] = useState(["java", "frontend"]);

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

  return (
    <div className="app">
      <Filters
        activeFilters={activeFilters}
        handleClearFilters={clearAllFilters}
        handleRemoveFilter={removeFilter}
      />
      <JobCompanyProfile />
    </div>
  );
}

export default App;
