import React from "react";
const SearchBar = () => (
    
  <form >
      <label htmlFor="header-search">
          <span>ITEMS HERE</span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Search item"
          name="s" 
      />
      <button type="submit">Search</button>
  </form>
  
);

export default SearchBar;