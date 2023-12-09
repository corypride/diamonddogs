import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/authHelpers';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Helpers/firebase';
import { getTest, logout } from '../Controllers/AuthController';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getFavorites } from '../Controllers/FavoritesController';


const FavoritesScreen = ({token, uid}) => {
    const [data, setData] = useState(null);
  
    const fetchFavorites = async () => {
        const data = await getFavorites(token, uid)
        if (data) {
            setData(data)
        }
    }

    useEffect(() => {
        // call api when user is logged in
        if (uid) {
            fetchFavorites()
        }
        
    }, [token, uid]);

  return (
  <>
    <NavigationBar />
    <div>
        <p>list or grid of favorites</p>
    </div>
  </>
  );

}

export default FavoritesScreen;
