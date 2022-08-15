import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

const booksArray = [
  { id: 1, author: "Orson Scott Card", title: "Ender's Game", year: 2001 },
  { id: 2, author: "Emma Stone", title: "Twilight", year: 2008 },
  { id: 3, author: "Tyrone Simmons", title: "Eragon", year: 2017 },
];

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState(booksArray);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);

    if (!e.target.value) setBooks(booksArray);

    else {
      const newBooks = booksArray.filter(
        (book) => book.year === +e.target.value
      );
      setBooks(newBooks);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="mt-3">
        <SearchBar handleSearchInput={handleSearchInput} value={searchInput} />
        <ProductTable searchInput={searchInput} books={books} />
      </div>
    </div>
  );
}

export default App;
