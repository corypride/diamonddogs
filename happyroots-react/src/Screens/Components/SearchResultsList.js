import React from 'react';
import "../styles/SearchResultsList.css";
import SearchResult from './SearchResult';

// Modify the id below to be the correct parameter for Perenual API. Below is just a placeholder.
const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'>
      {results.map((result, id) => {
        return <SearchResult result={result} key={id}/>;
      })}
  </div>
  );
};

export default SearchResultsList;