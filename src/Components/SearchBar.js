import React, { useState } from "react";
import '../styles/header.css';

// items props comes from main components articles
const SearchBar = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

//   this will have to be exported?? 
  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        aria-label="Search posts"
        className="searchBar"
      ></input>
      {/* PLACE SEARCHED ITEM TO MAIN */}
        <div>
            {filterItems? ('') : (`No search matches ${searchTerm}`) }
        </div>
    </div>
  );
};
export default SearchBar;
