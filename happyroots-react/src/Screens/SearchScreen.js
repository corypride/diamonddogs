import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/authHelpers';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Helpers/firebase';
import { getTest, logout } from '../Controllers/AuthController';
import NavigationBar from './Components/NavigationBar';
import '../App.css';


const SearchScreen = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();
  
    useEffect(() => {
        const user = getUserFromLocalStorage();

        if (user) {
            console.log('User:', user);
            setUser(user.providerData[0]);
        } else {
            console.log('User not logged in');
            navigate('/login');
        }
    }, []);

  return (
  <>
    <NavigationBar />
    <div>
        <p><button>Search</button></p>
    </div>
  </>
  );

}

export default SearchScreen;