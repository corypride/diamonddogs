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
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const FavoritesScreen = () => {
  const [fave, setFave] = useState([]);
  const [data, setData] = useState([]);
  const { uid, token } = getTokenAndUid() || {};
  const user = useAuthentication();
  console.log("react data", data);
  console.log(user);
  const [alert, setAlert] = useState();


  const handleClick = () => {
    console.log(uid);
    console.log(token);
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

  const toastSuccess = () => {
    toast.success(`success`, {
      className: "toastify-success",
    });
  };

  const toastError = () => {
    toast.error(`error`, {
      className: "toastify-error",
    });
  };



  return (
    <>
      <NavigationBar />
      <div className="divColor" style={{
          display: "flex",
          flexDirection: "column",
        }}>
        <p>buttons for testing</p>
        <button onClick={handleClick}>info in console</button>
        <button onClick={fetchUserFavorites}>
          display favorites table from sql
        </button>

        <br></br>
        <br></br>
        <br></br>
        <button onClick={toastSuccess}>toast success</button>
        <button onClick={toastError}>toast error</button>


        {data?.map((favorite) => (
          <ul key={favorite.id}>
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
