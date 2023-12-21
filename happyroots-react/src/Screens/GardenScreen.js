import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getSpeciesById, getAllSpecies, saveFavorites} from '../Controllers/PerenualApiController';
import { apiKey} from '../Config/perenualApiKey'
import { mockData, speciesList } from '../Controllers/mockData'
import { saveUserFavorites } from '../Controllers/FavoritesController';





const GardenScreen = ({token, uid}) => {
    const [data, setData] = useState([]);
    // console.log(speciesList)

    const list = speciesList.data
    // console.log(list[0].id)

    const pass = list.forEach((element) => console.log(element.id + " " +  element.common_name));
    // list.forEach((element) => console.log(element));
    // const pass = list.forEach((species) => <div>{species}</div>);


    // const fetchSpecies = async () => {
    //     const responseData = await getAllSpecies(token, apiKey);
    //     console.log(responseData)
    //     if (responseData) {
    //         setData(responseData)
    //     }
    // }


    // const saveFavorites = async () => {
    //     const responseData = await saveUserFavorites(token, uid)
    //     if (responseData) {
    //         setData(responseData)
    //     }

    // }      
    
    
    // const saveToGarden = async () => {
    //     const saveData = await saveUserFavorites(uid, data.id)
    //     if (saveData) {
    //         setData(saveData)
    //         console.log(saveData)
    //     }

    // }    


    function handleLog() {
        setData(speciesList)
        return console.log(uid, pass)
    }


    // const displaySpecies() {
    //         setData(speciesList)
    // }

    // const displaySpecies = async () => {
    //     const responseData = await getAllSpecies(token, speciesList);
    //     console.log(responseData)
    //     if (responseData) {
    //         setData(responseData)
    //     }
    // }


  return (
  <>
    <NavigationBar />
    <div>


        {list?.map((species=> <ul>
            <li>{species.id}</li>
            <li>{species.scientific_name}</li>
            <li>{species.common_name}</li>
            <img src={species.default_image?.thumbnail}></img>
        </ul>))}
        {/* <button onClick={fetchSpecies}>species list</button> */}
        <button onClick={handleLog}>species list</button>
        {/* <button onClick={}>testing post species</button> */}
        {/* <button onClick={makeButton()}></button> */}
        {/* <p >{data.common_name}</p> */}
        {/* {data.map(makeButton, this)} */}
        {/* {data?.map((species => <ul> */}
            {/* <button onClick={makeButton}></button> */}
            {/* <button onClick={console.log(species.id, uid)}></button> */}
            {/* {/* <button onClick={handleLog}></button> */}
            {/* <li>{species.id}</li>
            <li>{species.common_name}</li>
            <li>{species.cycle}</li>
            <li>{species.sunlight}</li>
            <li>{species.origin.map}</li>
            <li>watering : {species.watering}</li> */}

            {/* <img src={species.default_image?.thumbnail}></img> */}
        {/* </ul>))} */}

        {/* <div>
            <p>Data</p>
            <p>{mockData.common_name}</p>
            <p>{mockData.id}</p>
            <p>{mockData.other_name}</p>
                {dummyData.origin.map((list => <ol>
                <li>{list}</li>
                </ol>))}
                {dummyData.origin.map((fave => <ol>{fave}</ol>))}
        </div> */}

    </div>
  </>
  );

}

export default GardenScreen;
