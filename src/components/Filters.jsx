const Filters = ({
  activeFilters = [],
  handleClearFilters,
  handleRemoveFilter,
}) => {
  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <section className="filter-box">
      <ul className="filter-box__items" aria-label="Active Filters">
        {activeFilters.map((filter, index) => (
          <li key={index} className="filter-box__item ">
            <span>{filter}</span>
            <button
              className="filter-box__remove-item"
              onClick={() => handleRemoveFilter(filter)}
              aria-label={`Remove ${filter} Filter`}
            >
              <img
                src="/assets/images/icon-remove.svg"
                aria-hidden="true"
                alt=""
              />
            </button>
          </li>
        ))}
      </ul>
      <div className="filter-box__actions">
        <button
          className="filter-box__clear-all"
          onClick={handleClearFilters}
          aria-label="Clear Filters"
        >
          Clear
        </button>
      </div>
    </section>
  );
};

export default Filters;
