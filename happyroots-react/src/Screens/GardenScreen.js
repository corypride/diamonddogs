import React, { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import "../App.css";
import { getUserFavorites } from "../Controllers/FavoritesController";
import SpeciesDisplay from "./Components/SpeciesDisplay";

const GardenScreen = ({ token, uid }) => {
  const [faves, setFaves] = useState([]);

  useEffect(() => {
    fetchUserFavorites();
  }, [uid]);

  const fetchUserFavorites = async () => {
    const responseData = await getUserFavorites(token, uid);
    if (responseData) {
      return setFaves(responseData)
    }
  };

  return (
    <>
      <NavigationBar />
      <div>
        {faves.map((fave) => <SpeciesDisplay fave={fave} token={token} refresh={() => fetchUserFavorites()}/>)}
      </div>
    </>
  );
};
export default GardenScreen;
