import React, { useEffect, useState } from "react";
import { getSpeciesById } from "../../Controllers/PerenualApiController";
import { apiKey } from "../../Config/perenualApiKey";
import { deleteUserFavorite } from "../../Controllers/FavoritesController";

const SpeciesDisplay = ({token, fave, refresh}) => {
const [ species, setSpecies ] = useState([]); 

useEffect(() => {
    fetchSpecies(token, fave.speciesId, apiKey);
}, [fave]);

const fetchSpecies = async (token, speciesId, apiKey) => {
    const responseData = await getSpeciesById(token, speciesId, apiKey);
    if (responseData) {
      setSpecies(responseData);
    }
  }
  
  const fetchDelete = async (token, id) => {
    const responseData = await deleteUserFavorite(token, id);
    if (responseData) {
      refresh();
    }
  };

const { common_name, description, watering, default_image} = species
  return (
  <div>
  <p>{common_name}</p>
  <p>{description}</p>
  <p>watering: {watering}</p>
  <img src={default_image?.thumbnail}></img>
  <button onClick={() => fetchDelete(token, fave.id)}>delete from garden</button>
  </div>
  );
};

export default SpeciesDisplay;
