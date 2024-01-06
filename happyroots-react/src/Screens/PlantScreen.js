import React, { useEffect, useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import { useParams } from 'react-router-dom';
import { getSpeciesById, getCareInformation } from '../Controllers/PerenualApiController';
import { apiKey } from '../Config/perenualApiKey';

const PlantScreen = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [careInfo, setCareInfo] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      const data = await getSpeciesById(id, apiKey);
      setPlant(data);
    };

    const fetchCareInformation = async () => {
        const careData = await getCareInformation(id);
        setCareInfo(careData);
    };

    fetchPlantDetails();
    fetchCareInformation();
  }, [id]);

  if (!plant || !careInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavigationBar />
      <h1>{plant.common_name}</h1>
      <img src={plant.default_image?.medium_url} alt={`Image of ${plant.common_name}`} />
      <p>Description: {plant.description}</p>
      <p>Scientific Name: {plant.scientific_name}</p>
      <p>Family: {plant.family}</p>
      <p>Origin: {plant.origin.join(', ')}</p>
      <p>Type: {plant.type}</p>
      <p>Hardiness Miniumum: {plant.hardiness.min}</p>
      <p>Hardiness Maxiumum: {plant.hardiness.max}</p>

      <h2>{plant.common_name} Care Information</h2>
      <p>Watering Information: {careInfo.wateringDesc}</p>
      <p>Sunlight Information: {careInfo.sunlightDesc}</p>
      <p>Pruning Information: {careInfo.pruningDesc}</p>
    </div>
  );
  
};

export default PlantScreen;
