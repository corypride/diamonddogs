import React, { useEffect, useState, useCallback } from "react";
import NavigationBar from "./Components/NavigationBar";
import "../App.css";
import { getUserSpeciesIdList } from "../Controllers/FavoritesController";
import SpeciesDisplay from "./Components/SpeciesDisplay";

const GardenScreen = ({ token, uid }) => {
  const [speciesIdArray, setSpeciesIdArray] = useState([]);

  useEffect(() => {
  fetchUserSpeciesIdList();
  }, [uid]);

  const handleClick = () => {
    // console.log(uid);
    // console.log(token);
    console.log("species array " + speciesIdArray);
  };
  
  const fetchUserSpeciesIdList = async () => {
    const responseData = await getUserSpeciesIdList(token, uid);
    if (responseData) {
      return setSpeciesIdArray(responseData);
    }
  };

  return (
    <>
      <NavigationBar />
      <div>

        <button onClick={() => handleClick()}>info in console</button>
        <button onClick={() => fetchUserSpeciesIdList()}>fetch user species id array</button>
        {speciesIdArray.map((id) => <SpeciesDisplay id={id}/>)}
        
      </div>
    </>
  );
};
export default GardenScreen;
