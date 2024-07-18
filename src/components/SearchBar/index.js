import React, { useState } from "react";

import "./index.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="search-bar"
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
