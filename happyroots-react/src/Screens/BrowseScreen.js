import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getSpeciesById, getAllSpecies, saveFavorites} from '../Controllers/PerenualApiController';
import { apiKey} from '../Config/perenualApiKey'
import { mockData, speciesList } from '../Controllers/mockData'
import { saveUserFavorites } from '../Controllers/FavoritesController';
import { checkboxClasses } from '@mui/material';



const BrowseScreen = ({token, uid}) => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);


    const dataList = data.data;


    // useEffect(() => {
    //     // const species = fetchSpecies();
    //     document.body.onload = fetchSpecies;
        
    //   }, []);


// need buttons for next page and save to favorites




    const fetchSpecies = async () => {
        const responseData = await getAllSpecies(token, apiKey, page);
        if (responseData) {
            setData(responseData)
        }
    }
    // document.body.onload = fetchSpecies;



    // need 

    const fetchSave = async () => {
        const responseData = await saveUserFavorites(token, uid, data)
        if (responseData) {
            setData(responseData)
        }
    }




    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
        fetchSpecies();
        console.log(page)
    };

    const handlePreviousPage = () => {
        setPage(prevPage => prevPage -1 );
        fetchSpecies();
        console.log(page)

    };




  return (
  <>
    <NavigationBar />
    <div>
    <button onClick={handlePreviousPage}>Previous Page</button>
    <button onClick={handleNextPage}>Next Page</button>
        {dataList?.map((species => <ul>
            <button onClick={fetchSave}>save</button>
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
