import React, { useEffect, useState } from "react";
import { getSpeciesById } from "../../Controllers/PerenualApiController";
import { apiKey } from "../../Config/perenualApiKey";
import { deleteUserFavorite } from "../../Controllers/FavoritesController";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SpeciesDisplay = ({ fave, refresh }) => {
  const [species, setSpecies] = useState(null);
  const imgLink = "data:image/png;base64,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"

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
    }
  };

  const fetchDelete = async (id) => {
    try {
      const responseData = await deleteUserFavorite(id);
      if (responseData) {
        refresh();
        toast.success(`${species.common_name} has been deleted from the garden`);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error(`Error deleting ${species?.common_name || 'species'} from the garden`);
    }
  };

  if (!species) {
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}> 
    <div key={fave.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', boxSizing: 'border-box', border: '5px solid #ccd', borderRadius: '4vh', backgroundColor: '#cce' }}>

      <img src={default_image?.medium_url || default_image?.thumbnail || imgLink} alt={`${common_name} thumbnail`} />

      <div style={{ marginLeft: '20px' }}>
        <h3>Common Name: {common_name}</h3>
        <p>Description:</p> <p>{description}</p>
        <p>Cycle: {cycle}</p>
        <p>Sunlight: {sunlight}</p>
        <p>Watering: {watering}</p>
        <div>
          <button onClick={() => fetchDelete(fave.id)}>
            Delete {common_name} from garden
          </button>
        </div>
      </div>

    </div>
  </div>
  );
};

export default SpeciesDisplay;