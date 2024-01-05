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
import "../Controllers/PerenualApiController";
import { Alert, Box } from "@mui/material";
import { toast } from "react-toastify";
import ReactGA from 'react-ga4';
import SpeciesDisplay from "./Components/SpeciesDisplay";
import { useNavigate } from 'react-router-dom';


const SearchScreen = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const showResults = (event, query) => {
    console.log("button clicked")
    event.preventDefault();
    navigate(`/search-result`);
  }

  console.log(results);

    /*
    async function getPlants() {
      const urls = Array.from( { length: 0 }, (v,i) => `https://perenual.com/api/species-list?key=sk-p0RY6572ddd57bba23207&page=${i + 1}` );
      const promises = urls.map(url => fetch(url).then(res => res.json()).then(data => data.results));
      const plantData = (await Promise.all(promises)).flat();
      console.log(`Results for ${plantData.length} plants downloaded...`);
      console.log('Results:', plantData);
  }
  
  getPlants()*/




  return (
  <>
    <NavigationBar />
    <div>
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results}/>
          <button onClick={showResults}>Search</button>
        </div>
      <input type="search" ></input>
    </div>
  </>
  );

}

export default SearchScreen;