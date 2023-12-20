import React from 'react'
import "../styles/SearchResult.css";

// Modify result to match paramter from Perenual API. Below is just a placeholder.
const SearchResult = ({ result }) => {
  return <div className="search-result">{result.name}</div>
};

export default SearchResult;