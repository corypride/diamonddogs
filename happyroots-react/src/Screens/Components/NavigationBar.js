// NavigationBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

import { login, logout } from '../../Controllers/AuthController';
import { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../../Helpers/authHelpers';




const NavigationBar = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);


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
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        {/* <li><Link to="/login">Login</Link> </li> */}
        <li><Link to="/login" onClick={(logout)}>Logout</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
