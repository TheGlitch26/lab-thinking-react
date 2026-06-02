"use client";

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div>
        <input
          type="text"
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
          placeholder="Search..."
          style={{ padding: "0.5rem", width: "200px", marginBottom: "0.5rem" }}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products that are in stock
      </label>
    </div>
  );
}

export default SearchBar;
