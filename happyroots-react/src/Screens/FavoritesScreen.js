import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getUserFavorites, getAllFavorites, saveUserFavorites} from '../Controllers/FavoritesController';
import { speciesList } from '../Controllers/mockData';
import { getSpeciesById } from '../Controllers/PerenualApiController';
import { apiKey } from '../Config/perenualApiKey';


const FavoritesScreen = ({token, uid}) => {
    const [data, setData] = useState([]);
    // console.log('react data', data)

    {data?.map((favorite => <ul>
        <li>{console.log(favorite.speciesId)}</li>
    </ul>))}


    const handleClick = () => {
        // getUserFavorites(token, uid);
        console.log(uid)
        // console.log(data.id)
        console.log(token)
      }


    const fetchUserFavorites = async () => {
        const responseData = await getUserFavorites(token, uid)
        if (responseData) {
            setData(responseData)
        }
    }

    document.body.onload = fetchUserFavorites; 


    // const body = document.body;
    // body.onload = fetchUserFavorites;


    const fetchAllFavorites = async () => {
        const responseData = await getAllFavorites(token)
        if (responseData) {
            setData(responseData)
        }

    }    

    const saveFavorites = async () => {
        const responseData = await saveUserFavorites(token, uid)
        if (responseData) {
            setData(responseData)
        }

    }    
    



    // const displayGarden = async () => {
    //     const responseData = await getSpeciesById(token, uid, apiKey)
    //     if (responseData) {
    //         setData(responseData)
    //     }
    // }

    // console.log(displayGarden)


    // const list = speciesList.data
    // const list = speciesList.data[data.id]

    // const pass = list.forEach((element) => console.log(element.id + " " +  element.common_name));
    // console.log('specieslist' + list.forEach((element => console.log(element.id))))

    // need to pass favortie id into array index


//     console.log(list);
//     const show = (data, list) => {
        
//         if (data.id = list.id) {
//             // console.log(pass)
//             {list?.map((species=> <ul>
//         <li>{species.id}</li>
//         <li>{species.scientific_name}</li>
//         <li>{species.common_name}</li>
//         <img src={species.default_image?.thumbnail}></img>
//     </ul>))}
//             }
// }       


  return (
  <>
    <NavigationBar />
    <div>
        <p>buttons for testing</p>
        <button onClick={handleClick}>user id in console</button>
        {/* <button onClick={fetchUserFavorites}>user favorites get</button> */}
        <button onClick={fetchAllFavorites}>fetch all favorites from service</button>
        <button onClick={saveFavorites}>testing post favorite</button>
        {/* <p>{show}</p> */}
        {/* {list?.map((species=> <ul>
            <li>{species.id}</li>
            <li>{species.scientific_name}</li>
            <li>{species.common_name}</li>
            <img src={species.default_image?.thumbnail}></img>
        </ul>))} */}
        {/* {data?.map((favorite => <ul>
            <li>{favorite.id}</li>
            <li>{favorite.plantId}</li>
            <li>{favorite.commonName}</li>
            <li>{favorite.userId}</li>
            <li>{favorite.speciesId}</li>
            <img src={favorite?.thumbnail}></img>
        </ul>))} */}
    </div>
  </>
  );

}

export default FavoritesScreen;
