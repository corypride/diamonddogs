import React, { useState, useEffect } from "react";
import "../App.css";
import {
  getSpeciesById,
  getAllSpecies,
  saveFavorites,
  getSpeciesByInput
} from "../Controllers/PerenualApiController";
import { apiKey } from "../Config/perenualApiKey";
import { mockData, speciesList } from "../Controllers/mockData";
import { saveUserFavorites } from "../Controllers/FavoritesController";
import { Alert, Box } from "@mui/material";
import { toast } from "react-toastify";
import NavigationBar from "./Components/NavigationBar";
import "./SearchScreen";
import { SearchResult } from './Components/SearchResult';




function PlantSearchResults() {
    const [data, setData] = useState([]);
    const dataList = data.data;
    
    useEffect(() => {
        document.body.onLoad = fetchSpecies();
      }, []); 
    
      const fetchSpecies = async () => {
        const responseData = await getSpeciesByInput();
        if (responseData) {
          setData(responseData);
        }
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
            await fetchSpecies();
            toast.success(`${data.common_name} has been saved to your garden`, {
              className: 'toastify-success',
            });
          }
    
        } catch (error) {
          console.error("Error saving data:", error);
          toast.error(`Error saving ${data.common_name}to the garden. Please try again.`, {
            className: 'toastify-error',
          });
        }
      };

    return (
    
        <>
          <div>
            <h2>Plant Species</h2>
            
            {/* BUTTONS */}
            {/* <button onClick={() => handlePreviousPage()}>Previous Page</button>
            <button onClick={() => handleNextPage()}>Next Page</button> */}
            <br></br>
            <br></br>
    
            {/* LIST */}
            {dataList?.map((species) => (
              <div key={species.id}>
                <img src={species.default_image?.thumbnail}></img>
                <p>Common Name : {species.common_name}</p>
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
    
            {/* BUTTONS */}
            {/* <button onClick={() => handlePreviousPage()}>Previous Page</button>
            <button onClick={() => handleNextPage()}>Next Page</button> */}
          </div>
        </>
      ); 
    };

export default PlantSearchResults;