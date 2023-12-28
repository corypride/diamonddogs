import React from 'react';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import SearchBar from './Components/SearchBar';
import SearchResultsList from "./Components/SearchResultsList";
import { useEffect, useState } from 'react';


const SearchScreen = () => {

    const [results, setResults] = useState([]);

    const handleSearch = () => {
        console.log("search test")
    }

  return (
  <>
    <NavigationBar />
    <div>
        <p><button onClick={handleSearch}>Search</button></p>
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results}/>
        </div>
    </div>
  </>
  );

}

export default SearchScreen;