import React, { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import { useParams } from "react-router-dom";
import {
  getSpeciesById,
  getCareInformation,
} from "../Controllers/PerenualApiController";
import { apiKey } from "../Config/perenualApiKey";

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
    return <div>Loading....</div>;
  }

  return (
    <div className="divColor">
      <NavigationBar />
      <h1>{plant.common_name}</h1>
      <h4>Scientific Name: {plant.scientific_name}</h4>
      <img
        src={plant.default_image?.medium_url}
        alt={`Image of ${plant.common_name}`}
      />
      <p>Description: {plant.description}</p>
      {plant.family != null && <p>Family: {plant.family}</p>}
      <p>Origin: {plant.origin.join(", ")}</p>
      <p>Type: {plant.type}</p>
      <p>Indoor plant: {plant.indoor ? "Yes" : "No"}</p>
      <p>Max growth height: {plant.dimensions.max_value}</p>
      <p>Growth rate: {plant.growth_rate}</p>
      <p>Growth cycle: {plant.cycle}</p>
      <p>Edible Fruits: {plant.edible_fruit ? "Yes" : "No"}</p>
      <p>Flowers: {plant.flowers ? "Yes" : "No"}</p>
      {plant.flowers && <p>Flower color: {plant.flower_color}</p>}

      <h2>{plant.common_name} Care Information</h2>
      <p>Watering Information: {careInfo.wateringDesc}</p>
      <p>Sunlight Information: {careInfo.sunlightDesc}</p>
      <p>Pruning Information: {careInfo.pruningDesc}</p>
      {plant.pest_susceptibility && plant.pest_susceptibility.length > 0 && (
        <p>Pest Susceptibility: {plant.pest_susceptibility.join(", ")}</p>
      )}

      <h2>{plant.common_name} Hardiness Map</h2>
      <h4>
        Hardiness Range: Min: {plant.hardiness.min} - Max: {plant.hardiness.max}
      </h4>
      {plant.hardiness_location?.full_iframe && (
        <div
          dangerouslySetInnerHTML={{
            __html: plant.hardiness_location.full_iframe,
          }}
        />
      )}
    </div>
  );
};

export default PlantScreen;
