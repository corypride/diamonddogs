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
import { checkboxClasses } from "@mui/material";

const BrowseScreen = ({ token, uid }) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const dataList = data.data;

  console.log("in state page", page);

  useEffect(() => {
    document.body.onLoad = fetchSpecies();
  }, [page]); // refire when page value changes

  const fetchSpecies = async () => {
    const responseData = await getAllSpecies(token, apiKey, page);
    if (responseData) {
      setData(responseData);
    }
  };

  const fetchSave = async (data) => {
    const responseData = await saveUserFavorites(token, uid, data);
    if (responseData) {
      setData(responseData);
    }
  };


  const handleNextPage = () => {
    const newPage = page + 1;
    if(page > 99) {
        return 
    }
    setPage(newPage);
  };

  const handlePreviousPage = () => {
    const newPage = page - 1;
    if(page < 1) {
        return 
    }
    setPage(newPage);
  };





  return (
    <>
      <NavigationBar />
      <div>

        <h2>Plant Species</h2>

        {/* LIST */}
        {dataList?.map((species) => (
                        <div>
                      <p>{species.common_name}</p>
                      <p>{species.cycle}</p>
                      <p>{species.sunlight}</p>
                      <p>watering : {species.watering}</p>
                      <img src={species.default_image?.thumbnail}></img>
                      <br></br>
                    <button onClick={() => fetchSave(species)}>save</button>
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
