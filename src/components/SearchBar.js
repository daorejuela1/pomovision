import  { useState } from 'react';
import '../styles/searchbar.css';

/**
 * SearchBar component with inputHandler and handleSubmit functions.
 * ToDo: implement with elasticSearch in the future
 */
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchText(lowerCase);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={inputHandler}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

