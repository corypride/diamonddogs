import React from 'react'
import "../styles/SearchResult.css";


const SearchResult = ({ result }) => {
  return (
    <div 
      className="search-result" 
      onClick={(e) => alert(`You clicked on ${result.common_name}`)}
    >
      {result.common_name}
    </div>
)};

export default SearchResult;
