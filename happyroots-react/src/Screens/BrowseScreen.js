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
import ActionAlerts from "./Components/ActionAlerts";

const BrowseScreen = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const dataList = data.data;

  console.log("in state page", page);

  useEffect(() => {
    document.body.onLoad = fetchSpecies();
  }, [page]); // refire when page value changes

  const fetchSpecies = async () => {
    const responseData = await getAllSpecies(apiKey, page);
    if (responseData) {
      setData(responseData);
    }
  };

  const fetchSave = async (data) => {
    const responseData = await saveUserFavorites(data);
    if (responseData) {
      setData(responseData);
    }
  };

  const handleSave = async (data) => {
    try {
      await fetchSave(data);
      alert(`Saved to the garden`);

    } catch (error) {
      console.error("Error saving data:", error);
      alert(
        `Error saving to the garden, you might have already saved this species`
      );
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
      <NavigationBar />
      <div>
        <h2>Plant Species</h2>

        {/* BUTTONS */}
        <button onClick={() => handlePreviousPage()}>Previous Page</button>
        <button onClick={() => handleNextPage()}>Next Page</button>
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
        <button onClick={() => handlePreviousPage()}>Previous Page</button>
        <button onClick={() => handleNextPage()}>Next Page</button>
      </div>
    </>
  );
};

export default BrowseScreen;
