import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

const booksArray = [
  { id: 1, author: "Orson Scott Card", title: "Ender's Game", year: "2001" },
  { id: 2, author: "Emma Stone", title: "Twilight", year: "2008" },
  { id: 3, author: "Tyrone Simmons", title: "Eragon", year: "2017" },
];

const sortFunction = (a, b) => {
  const nameA = a.author.toUpperCase();
  const nameB = b.author.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
};

function App() {
  const [flag, setFlag] = useState(true);
  const [books, setBooks] = useState(booksArray);
  const [searchInput, setSearchInput] = useState("");
  const [searchType, updateSearchType] = useState("author");

  useEffect(() => {
    console.log("Use Effect");
    // updateSearchType("year");
    setBooks(books.sort(sortFunction));
    setFlag(false);
  }, [flag]);

  const handleSearchType = ({ target }) => {
    updateSearchType(target.value);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    if (!e.target.value) setBooks(booksArray);
    else {
      const newBooks = booksArray.filter(
        (book) => book[searchType] === e.target.value
      );
      setBooks(newBooks);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="mt-3">
        <SearchBar
          handleSearchInput={handleSearchInput}
          handleSearchType={handleSearchType}
          searchType={searchType}
          value={searchInput}
        />
        <ProductTable searchInput={searchInput} books={books} />
      </div>
    </div>
  );
}

export default App;
