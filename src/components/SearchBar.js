function SearchBar({
  searchInput,
  searchType,
  handleSearchInput,
  handleSearchType,
}) {
  return (
    <div className="mb-3">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter search..."
        className="w-full p-2 rounded bg-github-blue border border-white"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <div className="mt-2">
        <input
          type="radio"
          name="search-option"
          value="author"
          id="author"
          checked={searchType === "author"}
          onChange={handleSearchType}
          className="mr-1.5"
        />
        <label for="author">Author</label>
        <input
          type="radio"
          name="search-option"
          value="title"
          id="title"
          checked={searchType === "title"}
          onChange={handleSearchType}
          className="ml-4 mr-1.5"
        />
        <label for="title">Title</label>

        <input
          type="radio"
          name="search-option"
          value="year"
          id="year"
          checked={searchType === "year"}
          onClick={handleSearchType}
          className="ml-4 mr-1.5 "
        />
        <label for="year">Year</label>
      </div>
    </div>
  );
}

export default SearchBar;
