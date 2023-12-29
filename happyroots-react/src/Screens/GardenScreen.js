import React, { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import "../App.css";
import { getUserFavorites } from "../Controllers/FavoritesController";
import SpeciesDisplay from "./Components/SpeciesDisplay";

const GardenScreen = () => {
  const [faves, setFaves] = useState([]);

  useEffect(() => {
  fetchUserFavorites();
  }, []);

  const fetchUserFavorites = async () => {
    const responseData = await getUserFavorites();
    if (responseData) {
      return setFaves(responseData)
    }
  };

  return (
    <>
      <NavigationBar />
      <div>
        {faves.map((fave) => <SpeciesDisplay fave={fave} refresh={() => fetchUserFavorites()}/>)}
      </div>
    </>
  );
};
export default GardenScreen;
