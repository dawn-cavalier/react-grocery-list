import React from "react";
import "./SearchItem.css"

const SearchItem = ({search, setSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onInput={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
