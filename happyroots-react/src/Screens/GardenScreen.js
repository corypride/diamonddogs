import React, { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import { getUserFavorites } from "../Controllers/FavoritesController";
import SpeciesDisplay from "./Components/SpeciesDisplay";
import "../App.css";

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
      <div>
        {faves.map((fave) => <SpeciesDisplay key={fave.id} fave={fave} refresh={() => fetchUserFavorites()}/>)}
      </div>
    </>
  );
};
export default GardenScreen;
