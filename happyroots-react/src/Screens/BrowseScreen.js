import React, { useState, useEffect } from "react";
import NavigationBar from "./Components/NavigationBar";
import "../App.css";
import {
  getSpeciesById,
  getAllSpecies,
  saveFavorites,
} from "../Controllers/PerenualApiController";
import { apiKey } from "../Config/perenualApiKey";
import { mockData, speciesList } from "../Controllers/mockData";
import { saveUserFavorites } from "../Controllers/FavoritesController";
import { Alert, Box } from "@mui/material";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const BrowseScreen = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const dataList = data.data;

  console.log("in state page", page);

  useEffect(() => {
    fetchSpecies();
  }, [page]); // refire when page value changes

  const fetchSpecies = async () => {
    const responseData = await getAllSpecies(page);
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

  const handleNextPage = () => {
    const newPage = page + 1;
    if (page > 99) {
      return;
    }
    setPage(newPage);
  };

  const handlePreviousPage = () => {
    const newPage = page - 1;
    if (page < 1) {
      return;
    }
    setPage(newPage);
  };

  return (
    <>
      
      <div>
        <h2>Plant Species</h2>

        {/* BUTTONS */}
        <button onClick={() => handlePreviousPage()}>Previous Page</button>
        <button onClick={() => handleNextPage()}>Next Page</button>
        <br></br>
        <br></br>

        {/* LIST */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
        {data?.map((species) => (
          <div className="divColor"
              key={species.id}
              style={{
                width: "33%",
                marginBottom: "20px",
              }}
            >
            <img src={species.default_image?.thumbnail}></img>
            <p>Common Name: <Link to={`/plant/${species.id}`}>{species.common_name}</Link></p>
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

        {/* BUTTONS */}
        <button onClick={() => handlePreviousPage()}>Previous Page</button>
        <button onClick={() => handleNextPage()}>Next Page</button>
      </div>
    </>
  );
};

export default BrowseScreen;
