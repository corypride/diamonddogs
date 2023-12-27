import React, { useEffect, useState } from "react";
import { getSpeciesById } from "../../Controllers/PerenualApiController";
import { apiKey } from "../../Config/perenualApiKey";





const SpeciesDisplay = ({token, id}) => {

const [ species, setSpecies ] = useState([]); 

useEffect(() => {
fetchSpecies(token, id, apiKey);
}, [id]);

const fetchSpecies = async (token, speciesId, apiKey) => {
    const responseData = await getSpeciesById(token, speciesId, apiKey);
    if (responseData) {
      setSpecies(responseData);
    }
  }

const { common_name, description } = species
  return (
  <div>
  {/* bitchass */}
  <p>{common_name}</p>
  <p>{description}</p>
  </div>
  );
};

export default SpeciesDisplay;
