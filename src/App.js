import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

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
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchType, updateSearchType] = useState("author");

  // useEffect(() => {
  //   // updateSearchType("year");
  //   setBooks(books.sort(sortFunction));
  //   setFlag(false);
  // }, [flag]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000");
        const posts = await response.json();
        console.log(posts);
        setBooks(posts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredBooks(books);
  }, []);

  const handleSearchType = ({ target }) => {
    updateSearchType(target.value);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    if (!e.target.value) setFilteredBooks(books);
    else {
      const newBooks = books.filter(
        (book) => book[searchType] === e.target.value
      );
      setFilteredBooks(newBooks);
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
        <ProductTable searchInput={searchInput} books={filteredBooks} />
      </div>
    </div>
  );
}

export default App;
