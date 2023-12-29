import React, { useEffect, useState } from "react";
import { getSpeciesById } from "../../Controllers/PerenualApiController";
import { apiKey } from "../../Config/perenualApiKey";
import { deleteUserFavorite } from "../../Controllers/FavoritesController";
import { Alert } from "@mui/material";


const SpeciesDisplay = ({ fave, refresh }) => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    fetchSpecies(fave.speciesId, apiKey);
  }, [fave]);

  const fetchSpecies = async (speciesId, apiKey) => {
    const responseData = await getSpeciesById(speciesId, apiKey);
    if (responseData) {
      setSpecies(responseData);
    }
  };

  const fetchDelete = async (id) => {
    const responseData = await deleteUserFavorite(id);
    if (responseData) {
      refresh();
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetchDelete(id);
      alert(`${common_name} has been deleted from the garden`);
    } catch (error) {
      console.error("Error deleting data:", error);
      alert(`Error deleting ${common_name} from the garden`);
    }
  };

  const {
    id,
    common_name,
    description,
    watering,
    cycle,
    sunlight,
    default_image,
  } = species;
  return (
    <div key={id}>
      <img src={default_image?.thumbnail}></img>
      <p>Common Name : {common_name}</p>
      <p>Description : {description}</p>
      <p>Cycle : {cycle}</p>
      <p>Sunlight : {sunlight}</p>
      <p>Watering: {watering}</p>
      <div>
        <button onClick={() => handleDelete(fave.id)}>
          Delete {common_name} from garden
        </button>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default SpeciesDisplay;
