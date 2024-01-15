import React from "react";
import NavigationBar from "./Components/NavigationBar";
import "../App.css";
import SearchBar from "./Components/SearchBar";
import SearchResultsList from "./Components/SearchResultsList";
import { useEffect, useState } from "react";
import {
  getSpeciesById,
  getAllSpecies,
  saveFavorites,
  getSpeciesByInput,
} from "../Controllers/PerenualApiController";
import { mockData, speciesList } from "../Controllers/mockData";
import { saveUserFavorites } from "../Controllers/FavoritesController";
import "../Controllers/PerenualApiController";
import { Alert, Box } from "@mui/material";
import { toast } from "react-toastify";
import ReactGA from "react-ga4";
import SpeciesDisplay from "./Components/SpeciesDisplay";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchScreen = () => {
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  const showResults = (event, query) => {
    console.log("button clicked");
    event.preventDefault();
    navigate(`/search-result`);
  };

  const fetchSave = async (data) => {
    try {
      const responseData = await saveUserFavorites(data);
      // No need to update state here
      return responseData; // Return the response data
    } catch (error) {
      console.error("Error saving user favorites:", error);
      throw error;
    }
  };

  const handleSave = async (data) => {
    try {
      const response = await fetchSave(data);

      if (response) {
        // After saving, refetch the species data to update the list
        //await fetchSpecies();
        toast.success(`${data.common_name} has been saved to your garden`, {
          className: "toastify-success",
        });
      }
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error(
        `Error saving ${data.common_name}to the garden. Please try again.`,
        {
          className: "toastify-error",
        }
      );
    }
  };

  console.log(results);

  return (
    <>
      <NavigationBar />
      <div>
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          {/* <SearchResultsList results={results}/> */}
          {/* <button onClick={showResults}>Search</button> */}
        </div>
        <input type="search"></input>
        <h2>Search Results</h2>
        {/* LIST */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {results?.map((species) => (
            <div
              key={species.id}
              className="divColor"
              style={{
                width: "33%",
                marginBottom: "20px",
              }}
            >
              <img src={species.default_image?.thumbnail  || 'Images/no image found.jpg'}></img>
              <p>
                Common Name:{" "}
                <Link to={`/plant/${species.id}`}>{species.common_name}</Link>
              </p>
              <p>Cycle : {species.cycle}</p>
              <p>Sunlight : {species.sunlight}</p>
              <p>Watering : {species.watering}</p>
              <div>
                <button onClick={() => handleSave(species)}>
                  Save {species.common_name} to garden
                </button>
              </div>
              <br></br>
              <br></br>
            </div>
          ))}
        </div>
      </div>
      <div>
        {/* BUTTONS */}
        {/* <button onClick={() => handlePreviousPage()}>Previous Page</button>
            <button onClick={() => handleNextPage()}>Next Page</button> */}
        <br></br>
        <br></br>

        {/* BUTTONS */}
        {/* <button onClick={() => handlePreviousPage()}>Previous Page</button>
            <button onClick={() => handleNextPage()}>Next Page</button> */}
      </div>
    </>
  );
};

export default SearchScreen;
