const Filters = ({
  activeFilters = [],
  handleClearFilters,
  handleRemoveFilter,
}) => {
  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="filter-box">
      <ul className="filter-box__items">
        {activeFilters.map((filter, index) => (
          <li key={index} className="filter-box__item ">
            <span>{filter}</span>
            <button
              className="filter-box__remove-item"
              onClick={() => handleRemoveFilter(filter)}
            >
              <img src="/assets/images/icon-remove.svg" alt="Remove filter" />
            </button>
          </li>
        ))}
      </ul>
      <div className="filter-box__actions">
        <button className="filter-box__clear-all" onClick={handleClearFilters}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
