function SearchBar({ searchInput, handleSearchInput }) {
  return (
    <div className="mb-3">
      <input
        type="number"
        name="search"
        id="search"
        placeholder="Enter search..."
        className="w-full p-2 rounded bg-github-blue border border-white"
        value={searchInput}
        onChange={handleSearchInput}
      />
    </div>
  );
}

export default SearchBar;
