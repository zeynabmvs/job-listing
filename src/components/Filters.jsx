const Filters = ({
  activeFilters = [],
  handleClearFilters,
  handleRemoveFilter
}) => {
  const onClearFiltersClick = () => {
    handleClearFilters();
  };

  const onRemoveFilter = (filter) => {
    handleRemoveFilter(filter);
  };

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="filters box-shadow">
      <ul className="filters__active">
        {activeFilters.map((filter, index) => (
          <li key={index} className="filters__active__item ">
            <span>{filter}</span>
            <button
              className="filters__active__item__remove"
              onClick={() => onRemoveFilter(filter)}
            >
              <img src="/assets/images/icon-remove.svg" alt="Remove filter" />
            </button>
          </li>
        ))}
      </ul>
      <div className="filters__action">
        <button
          className="filters__action__clear"
          onClick={onClearFiltersClick}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
