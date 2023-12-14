import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/authHelpers';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Helpers/firebase';
import { getTest, logout } from '../Controllers/AuthController';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getUserFavorites, getAllFavorites, getAll ,addFavorites } from '../Controllers/FavoritesController';
import DisplayFavorite from './Components/DisplayFavoritesComponent';

const FavoritesScreen = ({token, uid}) => {
    const [data, setData] = useState([]);
    console.log('react data', data)

    const handleClick = () => {
        getUserFavorites(token, uid);
        console.log(uid)
        console.log(token)
      }

    // const fetchUserFavorites = async () => {
    //     const response = await getUserFavorites(token, uid)
    //     if (response.ok) {
    //         setData(response)
    //     }
    // }

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
    

    const addFave = '{"id" : "6", "name" : "dummy", "userId" : "fh3947fhweiuhf09w8"}';
    const addFavorites = async () => {
        const response = await addFavorites(token)
        if (response.ok) {
            setData(response)
        }
    }

    // useEffect(() => {
    //     // call api when user is logged in
    //     if (uid) {
    //         fetchAllFavorites()
    //     }
        
    // }, [token, uid]);

    const handleData = () => {
        console.log(data)
        console.log(data[3])
    }

  return (
  <>
    <NavigationBar />
    <div>
        <p>list or grid of favorites</p>
        {/* <button onClick={handleClick}>user id in response body</button> */}
        <button onClick={fetchUserFavorites}>user favorites post</button>
        <button onClick={fetchAllFavorites}>fetch all favorites from service</button>
        <button onClick={handleData}>show data</button>
        {/* {data?.map((favorite => <p>{favorite.name}</p>))} */}
        {data?.map((favorite => <ul>
            <li>{favorite.name}</li>
            <li>{favorite.userId}</li>
            <li>{favorite.plantId}</li>
        </ul>))}
        {/* <button onClick={fetchAddFavorites}>add</button> */}
        {/* <button onClick={handleData}>data</button> */}
        <p></p>
        <p>

        {/* <ul>{arrayDataItems}</ul>  */}
        </p>
        
        {/* <DisplayFavorite /> */}
    </div>
  </>
  );

}

export default FavoritesScreen;
