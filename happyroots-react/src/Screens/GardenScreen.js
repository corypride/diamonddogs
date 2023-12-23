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





const GardenScreen = ({ token, uid }) => {


    useEffect(() => {
        // document.body.onLoad = fetchUserFavorites();
        document.body.onLoad = sayHello();
      }, []);



      function sayHello() {
        return "test"
      }


return (
    <>
      <NavigationBar />
      <div>
        <p onLoad={sayHello}>{sayHello}</p>
      </div>
    </>
);
};
export default GardenScreen;