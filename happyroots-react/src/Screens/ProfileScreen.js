import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/authHelpers';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import '../App.css';

const HomeScreen = () => {
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
        <p>Email: {user.email}</p>
        <p>Phone Number:{user.phoneNumber}</p>
        <p>Photo URL:{user.photoURL}</p>
    </div>
  </>
  );

}

export default HomeScreen;