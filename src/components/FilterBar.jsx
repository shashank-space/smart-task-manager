function FilterBar({
  filter,
  setFilter,
}) {
  return (
    <div className="filters">

      <button
        onClick={() =>
          setFilter("All")
        }
      >
        All
      </button>

      <button
        onClick={() =>
          setFilter("Active")
        }
      >
        Active
      </button>

      <button
        onClick={() =>
          setFilter("Completed")
        }
      >
        Completed
      </button>

    </div>
  );
}

export default FilterBar;