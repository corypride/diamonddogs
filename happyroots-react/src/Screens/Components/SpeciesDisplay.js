import React, { useEffect, useState } from "react";
import { getSpeciesById } from "../../Controllers/PerenualApiController";
import { apiKey } from "../../Config/perenualApiKey";
import { deleteUserFavorite } from "../../Controllers/FavoritesController";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const SpeciesDisplay = ({ fave, refresh }) => {
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    fetchSpecies(fave.speciesId, apiKey);
  }, [fave]);

  const fetchSpecies = async (speciesId, apiKey) => {
    try {
      const responseData = await getSpeciesById(speciesId, apiKey);
      if (responseData) {
        setSpecies(responseData);
      }
    } catch (error) {
      console.error("Error fetching species:", error);
      // Handle error if needed
    }
  };

  const fetchDelete = async (id) => {
    try {
      const responseData = await deleteUserFavorite(id);
      if (responseData) {
        // Refresh the data without reloading the entire page
        refresh();
        // Notify user with a success toast
        toast.success(`${species.common_name} has been deleted from the garden`);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      // Notify user with an error toast
      toast.error(`Error deleting ${species?.common_name || 'species'} from the garden`);
    }
  };

  if (!species) {
    // Optionally, you can render a loading state here
    return <p>Loading...</p>;
  }

  const {
    common_name,
    description,
    watering,
    cycle,
    sunlight,
    default_image,
  } = species;

  return (
    <div key={fave.id}>
      {default_image && <img src={default_image.thumbnail} alt={`${common_name} thumbnail`} />}
      <p>Common Name: <Link to={`/plant/${species.id}`}>{species.common_name}</Link></p>
      <p>Description: {description}</p>
      <p>Cycle: {cycle}</p>
      <p>Sunlight: {sunlight}</p>
      <p>Watering: {watering}</p>
      <div>
        <button onClick={() => fetchDelete(fave.id)}>
          Delete {common_name} from garden
        </button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default SpeciesDisplay;