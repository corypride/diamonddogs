import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getSpeciesById, getAllSpecies, saveFavorites} from '../Controllers/PerenualApiController';
import { apiKey} from '../Config/perenualApiKey'
import { mockData, speciesList } from '../Controllers/mockData'
import { saveUserFavorites } from '../Controllers/FavoritesController';





const BrowseScreen = ({token, uid}) => {
    const [data, setData] = useState([]);

// need buttons for next page and save to favorites

    const fetchSpecies = async () => {
        const responseData = await getAllSpecies(token, apiKey);
        if (responseData) {
            setData(responseData)
        }
    }
    document.body.onload = fetchSpecies;



const dataList = data.data;



  return (
  <>
    <NavigationBar />
    <div>
        {dataList?.map((species => <ul>
            <li>{species.id}</li>
            <li>{species.common_name}</li>
            <li>{species.cycle}</li>
            <li>{species.sunlight}</li>
            <li>watering : {species.watering}</li>
            <img src={species.default_image?.thumbnail}></img> 
        </ul>))}
    </div>
  </>
  );

}

export default BrowseScreen;
