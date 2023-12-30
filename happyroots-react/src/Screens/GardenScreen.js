import React, { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import { getUserFavorites } from "../Controllers/FavoritesController";
import SpeciesDisplay from "./Components/SpeciesDisplay";
import "../App.css";

const GardenScreen = () => {
  const [status, setStatus] = useState({
    loading: true,
    error: null,
    data: [],
  });

  useEffect(() => {
    fetchUserFavorites();
  }, []);

  const fetchUserFavorites = async () => {
    try {
      const responseData = await getUserFavorites();
      setStatus({ loading: false, error: null, data: responseData });
    } catch (error) {
      console.error("Error fetching favorites:", error);
      setStatus({
        loading: false,
        error: "Error fetching favorites. Please try again.",
        data: [],
      });
    }
  };

  return (
    <>
      <NavigationBar />
      <div>
        {status.loading ? (
          <p>Loading favorites...</p>
        ) : status.error ? (
          <p>{status.error}</p>
        ) : (
          status.data.map((fave) => (
            <SpeciesDisplay
              key={fave.id}
              fave={fave}
              refresh={() => fetchUserFavorites()}
            />
          ))
        )}
      </div>
    </>
  );
};

export default GardenScreen;
