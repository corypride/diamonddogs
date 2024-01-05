import React from 'react';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import SearchBar from './Components/SearchBar';
import SearchResultsList from "./Components/SearchResultsList";
import { useEffect, useState } from 'react';
import {
  getSpeciesById,
  getAllSpecies,
  saveFavorites,
} from "../Controllers/PerenualApiController";
import { mockData, speciesList } from "../Controllers/mockData";
import { saveUserFavorites } from "../Controllers/FavoritesController";
import { Alert, Box } from "@mui/material";
import { toast } from "react-toastify";
import ReactGA from 'react-ga4';
import SpeciesDisplay from "./Components/SpeciesDisplay";

const SearchScreen = () => {

    const [results, setResults] = useState([]);

    const handleSearch = () => {
        console.log("search test")
    }

  return (
  <>
    <NavigationBar />
    <div>
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results}/>
          <button onClick={handleSearch}>Search</button>
        </div>
      <input type="search" ></input>
    </div>
  </>
  );

}

export default SearchScreen;