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
  const [page, setPage] = useState(98);
  const [species, setSpecies] = useState();
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

  const fetchSave = async () => {
    const responseData = await saveUserFavorites(token, uid, data);
    if (responseData) {
      setData(responseData);
      // console.log(responseData.data)
    }
  };

  const showSpeciesId = async () => {
    const responseData = await getAllSpecies(token, apiKey);
    if (responseData) {
      setSpecies(responseData.data);
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
        {/* <button onClick={handleFetch}>species test</button> */}
        <br></br>

        {/* BUTTONS */}
        <button onClick={() => handlePreviousPage()}>Previous Page</button>
        <button onClick={() => handleNextPage()}>Next Page</button>

        {/* LIST */}
        {dataList?.map((species, index) => (
          <ul>
            <button onClick={fetchSave}>save</button>
            <button onClick={showSpeciesId}>id</button>
            <li>{index}</li>
            <li>{species.id}</li>
            <li>{species.common_name}</li>
            <li>{species.cycle}</li>
            <li>{species.sunlight}</li>
            <li>watering : {species.watering}</li>
            <img src={species.default_image?.thumbnail}></img>
          </ul>
        ))}
      </div>
    </>
  );
};

export default BrowseScreen;
