import React, { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import "../App.css";
import {
  getUserFavorites,
  getUserSpeciesIdList,
} from "../Controllers/FavoritesController";
import { getSpeciesById } from "../Controllers/PerenualApiController";
import { apiKey } from "../Config/perenualApiKey";
import ActionAlerts from "./Components/ActionAlerts";
import { Alert, Box, Stack } from "@mui/material";

const FavoritesScreen = () => {
  const [fave, setFave] = useState([]);
  const [data, setData] = useState([]);
  console.log("react data", data);

  useEffect(() => {
    document.body.onLoad = fetchUserFavorites();
  }, []);

  const handleClick = () => {
    console.log("data = " + data.data);
    console.log("fave = " + fave);
  };

  const fetchUserFavorites = async () => {
    const responseData = await getUserFavorites();
    if (responseData) {
      setData(responseData);
      // console.log(responseData)
    }
  };

  const fetchUserSpeciesIdList = async () => {
    const responseData = await getUserSpeciesIdList();
    if (responseData) {
      setData(responseData);
      console.log(responseData);
    }
  };


  const handleAlert = () => {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <Alert>This is a basic Alert.</Alert>
        </Box>
      </div>
    );
  };

  function myFunction() {
    alert("I am an alert box!");
  }

  function con() {
    alert("test");
  }

  function dualFunction() {
    myFunction();
    // handleAlert();
    con();
    // <ActionAlerts />
    // ActionAlerts();
  }

  return (
    <>
      <NavigationBar />
      <div>
        <button onClick={handleAlert}>test</button>
        <button onClick={dualFunction}>dualFunction</button>

        <p>buttons for testing</p>
        <button onClick={handleClick}>info in console</button>
        <button onClick={fetchUserFavorites}>
          display favorites table from sql
        </button>
        {data?.map((favorite) => (
          
          <ul key={favorite.id}>
        <ActionAlerts />
          <li></li>
            <li>{favorite.id}</li>
            <li>{favorite.commonName}</li>
            <img src={favorite?.thumbnail}></img>
            <li>{favorite.speciesId}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default FavoritesScreen;
