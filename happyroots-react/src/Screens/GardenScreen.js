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
  const [speciesIdArray, setSpeciesIdArray] = useState([]);
  const [fave, setFave] = useState([]);
  const dataArray = [];


  const baseUrl = `https://perenual.com/api/species/details`;


  useEffect(() => {
  document.body.onLoad = fetchUserSpeciesIdList();
  }, [uid]);

  useEffect(() => {
    document.body.onload = handleDataArray();
  })

  // useEffect(() => {
  //   document.body.onload = 
  // })


  
  const handleClick = () => {
    console.log(uid);
    console.log(token);
    console.log("species array " + speciesIdArray);
    // console.log("fave " + fave);
    console.log("data array " + dataArray);
    console.log(dataArray);
    // console.log(dataArray[4].care_level);
    console.log(dataArray?.map((index) => index.id))
    // console.log(dataArray[2].common_name);

  };
  
  const fetchUserSpeciesIdList = async () => {
    const responseData = await getUserSpeciesIdList(token, uid);
    if (responseData) {
      setSpeciesIdArray(responseData);
    }
  };

const handleDataArray = () => {speciesIdArray.map((speciesId)  => fetchSpecies(token, speciesId, apiKey))}

  

  const fetchSpecies = async (token, speciesId, apiKey) => {
    const responseData = await getSpeciesById(token, speciesId, apiKey);
    if (responseData) {
      // setFave(responseData);
      return dataArray.push(responseData);
  }
}


dataArray?.map((index) => console.log(index))



const datalist = [{id: 1, common_name: "try"}, {id: 2, common_name: "rya"}, {id: 3, common_name: "boom"}, ]

const arrayDataItems = dataArray.map(index => 
  <li key={index.id}>
    <p>{index.common_name}</p>
    {/* <span>{species.}</span> */}
  </li>
)


  return (
    <>
      <NavigationBar />
      <div>
      
        <button onClick={() => handleClick()}>info in console</button>
        <button onClick={() => fetchUserSpeciesIdList()}>user favorites by species id</button>
        <button onClick={() => handleDataArray()}>handle data</button>

      {/* returning arrayDataItems wrapped in <ul> */}
      <ul>{arrayDataItems}</ul>




          {/* {dataArray?.map((index) => (
          <div>
            <p>{index.common_name}</p>
            <p>{index.cycle}</p>
            <p>{index.sunlight}</p>
            <p>watering : {index.watering}</p>
            <img src={index.default_image?.thumbnail}></img>
            <br></br>
            <button onClick={() => fetchSave(species)}>save</button>
          </div>
        ))} */}



      </div>
    </>
  );
};
export default GardenScreen;
