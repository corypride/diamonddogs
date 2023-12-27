import React, { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import "../App.css";
import {
  getUserFavorites,
  getAllFavorites,
  saveUserFavorites,
  getUserSpeciesIdList,
} from "../Controllers/FavoritesController";
import { speciesList } from "../Controllers/mockData";
import { getSpeciesById } from "../Controllers/PerenualApiController";
import { apiKey } from "../Config/perenualApiKey";

const FavoritesScreen = ({ token, uid }) => {
  const [fave, setFave] = useState([]);
  const [species, setSpecies] = useState([]);
  const [data, setData] = useState([]);
  console.log("react data", data);

  useEffect(() => {
    document.body.onLoad = fetchUserFavorites();
  }, []);

  const handleClick = () => {
    // getUserFavorites(token, uid);
    console.log(uid);
    console.log(token);
    console.log("data = " + data.data);
    console.log("fave = " + fave);
  };

  const fetchUserFavorites = async () => {
    const responseData = await getUserFavorites(token, uid);
    if (responseData) {
      setData(responseData);
      // console.log(responseData)
    }
  };

  const fetchUserSpeciesIdList = async () => {
    const responseData = await getUserSpeciesIdList(token, uid);
    if (responseData) {
      setData(responseData);
      console.log(responseData);
    }
  };

  const fetchSpecies = async () => {
    const responseData = await getSpeciesById(token, data, apiKey);
    console.log(
      data?.data?.map(
        (id) => `https://perenual.com/api/species/details/${id}?key=${apiKey}`
      )
    );
    if (responseData) {
      setSpecies(responseData);
      console.log(responseData);
    }
  };

  const listFaves = async () => {
    fave.forEach((id) => fetchSpecies(id));
  };

  return (
    <>
      <NavigationBar />
      <div>
        <p>buttons for testing</p>
        <button onClick={handleClick}>info in console</button>
        <button onClick={fetchUserSpeciesIdList}>
          species id list from favorites table
        </button>
        <button onClick={fetchUserFavorites}>
          display favorites table from sql
        </button>
        <button onClick={fetchSpecies}>species</button>
        <button onClick={listFaves}>listFaves</button>
        {/* <p>{show}</p> */}
        {/* {list?.map((species=> <ul>
            <li>{species.id}</li>
            <li>{species.scientific_name}</li>
            <li>{species.common_name}</li>
            <img src={species.default_image?.thumbnail}></img>
        </ul>))} */}
        {data?.map((favorite) => (
          <ul>
            <li>{favorite.speciesId}</li>
            <li>{favorite.commonName}</li>
            <img src={favorite?.thumbnail}></img>
          </ul>
        ))}
      </div>
    </>
  );
};

export default FavoritesScreen;
