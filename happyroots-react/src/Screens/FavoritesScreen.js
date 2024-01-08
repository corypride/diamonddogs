import React, { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import "../App.css";
import {
  getUserFavorites,
  getUserSpeciesIdList,
} from "../Controllers/FavoritesController";
import { getSpeciesById } from "../Controllers/PerenualApiController";
import { apiKey } from "../Config/perenualApiKey";
import { getTokenAndUid } from "../Controllers/FavoritesController";
import useAuthentication from "../Hooks/useAuthentication";
import { toast } from "react-toastify";
import { speciesDataArray } from "../Data/speciesData";

const FavoritesScreen = () => {
  const [fave, setFave] = useState([]);
  const [data, setData] = useState([]);
  const { uid, token } = getTokenAndUid() || {};
  const user = useAuthentication();
  console.log("react data", data);
  console.log(user);


  const handleClick = () => {
    console.log(uid);
    console.log(token);
    // console.log("data = " + data.data);
    // console.log("fave = " + fave);
    // console.log(speciesDataArray.map(id => id.scientific_name));
  };


  
    // const faveArray = [3, 7, 19, 203, 2080]
    // faveArray.forEach((element) => console.log(speciesDataArray[element].common_name));


  const fetchUserFavorites = async () => {
    const responseData = await getUserFavorites();
    if (responseData) {
      setFave(responseData);
      // console.log(responseData);
    }
  };

  const fetchUserSpeciesIdList = async () => {
    const responseData = await getUserSpeciesIdList();
    if (responseData) {
      setData(responseData);
      // console.log(responseData);
    }
  };
  
  const toastSuccess = () => {
    toast.success(`success`);
  };

  const toastError = () => {
    toast.error(`error`);
  };


  const reload = () => {
    window.location.reload();
  }


  return (
    <>
      <NavigationBar />
      <div className="divColor" style={{
          display: "flex",
          flexDirection: "column",
        }}>
        {/* <div> */}
        <h4>buttons for testing</h4>
        <button onClick={handleClick}>info in console</button>
        <button onClick={fetchUserFavorites}>
          display favorites table from sql
        </button>
        <button onClick={fetchUserSpeciesIdList}>
          display favorites array by species id
        </button>
        <button onClick={reload}>reload</button>
        <br></br>
        <button onClick={toastSuccess}>toast success</button>
        <button onClick={toastError}>toast error</button>


        {fave?.map((favorite, index) => (
          <div>

          <ul key={favorite.id}>
            <li></li>
            <li>{speciesDataArray[favorite.speciesId].common_name}</li>
            
            <li>species id : {favorite.speciesId}</li>
          </ul>
          </div>
        ))}


                {data?.map((favorite, index) => (
          <div className="divColor" style={{alignItems: 'center', display: 'flex'}}>

          <ul key={favorite.id}>
            <li></li>
            <li>{speciesDataArray[favorite].common_name}</li>
            <li>{speciesDataArray[favorite].scientific_name}</li>
            <img src={speciesDataArray[favorite].default_image?.thumbnail}/>
            <li>{speciesDataArray[favorite].watering}</li>
          </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default FavoritesScreen;
