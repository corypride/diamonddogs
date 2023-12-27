import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/authHelpers';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Helpers/firebase';
import { getTest, logout } from '../Controllers/AuthController';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getUserFavorites, getAllFavorites, saveUserFavorites} from '../Controllers/FavoritesController';


const FavoritesScreen = ({token, uid}) => {
    const [data, setData] = useState([]);
    console.log('react data', data)

    const handleClick = () => {
        getUserFavorites(token, uid);
        console.log(uid)
        console.log(token)
      }


    const fetchUserFavorites = async () => {
        const responseData = await getUserFavorites(token, uid)
        if (responseData) {
            setData(responseData)
        }
    }

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
    


  return (
  <>
    <NavigationBar />
    <div>
        <p>buttons for testing</p>
        <button onClick={handleClick}>user id in console</button>
        <button onClick={fetchUserFavorites}>user favorites get</button>
        <button onClick={fetchAllFavorites}>fetch all favorites from service</button>
        <button onClick={saveFavorites}>testing post favorite</button>
        {data?.map((favorite => <ul>
            <li>{favorite.id}</li>
            <li>{favorite.plantId}</li>
            <li>{favorite.commonName}</li>
            <li>{favorite.userId}</li>
            <li>{favorite.speciesId}</li>
            <img src={favorite?.thumbnail}></img>
        </ul>))}
    </div>
  </>
  );

}

export default FavoritesScreen;
