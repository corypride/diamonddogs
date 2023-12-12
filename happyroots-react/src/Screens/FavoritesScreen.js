import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/authHelpers';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Helpers/firebase';
import { getTest, logout } from '../Controllers/AuthController';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getFavorites, getAllFavorites, getAll ,addFavorites } from '../Controllers/FavoritesController';
import DisplayFavorite from './Components/DisplayFavoritesComponent';



const FavoritesScreen = ({token, uid}) => {

    const handleClick = () => {
        getFavorites(token, uid);
        console.log(uid)
        console.log(token)
      }

    const [data, setData] = useState(null);
  
    const fetchFavorites = async () => {
        const data = await getFavorites(token, uid)
        if (data) {
           
            setData(data)
        }
    }



    const fetchAllFavorites = async () => {
        const data = await getAllFavorites(token)
        if (data) {
            console.log(data)
            // need to map array of objects

            setData(data)

        }
    }    
    
    const fetchAll = async () => {
        const data = await getAll(token)
        if (data) {
            console.log(data)
            // need to map array of objects

            setData(data)

        }
    }    

    // const addFave = '{"id" : "6", "name" : "dummy", "userId" : "fh3947fhweiuhf09w8"}';
    // const fetchAddFavorites = async () => {
    //     const data = await addFavorites(token)
    //     if (data) {
    //         setData(data)
    //     }
    // }

    useEffect(() => {
        // call api when user is logged in
        if (uid) {
            fetchFavorites()
        }
        
    }, [token, uid]);

    const handleData = () => {
        console.log(data)
    }

    const courses = [
        "Full Stack Developement Program",
        "Python Automation Testing Program",
        "UI/UX Program",
      ];

      const arrayDataItems = courses.map((course) => <li>{course}</li>);

    console.log(arrayDataItems)

  return (
  <>
    <NavigationBar />
    <div>
        <p>list or grid of favorites</p>
        <button onClick={handleClick}>user id in response body</button>
        <button onClick={fetchAllFavorites}>fetch all favorites from service</button>
        <button onClick={fetchAll}>fetch all from repository</button>
        {/* <button onClick={fetchAddFavorites}>add</button> */}
        {/* <button onClick={handleData}>data</button> */}
        <p></p>
        <p>

        {/* <ul>{arrayDataItems}</ul>  */}
        </p>
        
        <DisplayFavorite />
    </div>
  </>
  );

}

export default FavoritesScreen;
