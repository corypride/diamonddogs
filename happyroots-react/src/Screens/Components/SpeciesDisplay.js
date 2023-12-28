import React, { useEffect, useState } from "react";
import { getSpeciesById } from "../../Controllers/PerenualApiController";
import { apiKey } from "../../Config/perenualApiKey";
import { deleteUserFavorite } from "../../Controllers/FavoritesController";
import { ToastContainer, toast } from "react-toastify";
import { Alert } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const SpeciesDisplay = ({ token, fave, refresh }) => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    fetchSpecies(token, fave.speciesId, apiKey);
  }, [fave]);

  const fetchSpecies = async (token, speciesId, apiKey) => {
    const responseData = await getSpeciesById(token, speciesId, apiKey);
    if (responseData) {
      setSpecies(responseData);
    }
  };

  const fetchDelete = async (token, id) => {
    const responseData = await deleteUserFavorite(token, id);
    if (responseData) {
      refresh();
    }
  };

  const handleDelete = async (token, id) => {
    try {
      await fetchDelete(token, id);
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
        <button onClick={() => handleDelete(token, fave.id)}>
          Delete {common_name} from garden
        </button>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default SpeciesDisplay;
