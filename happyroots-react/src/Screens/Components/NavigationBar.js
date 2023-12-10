// NavigationBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
// import { auth } from '../Helpers/firebase';

import { login, logout } from '../../Controllers/AuthController';
import { auth } from '../../Helpers/firebase';





const NavigationBar = () => {

  const nagivate = useNavigate();

const handleLogout = () => {
  auth.signOut();
  logout();
  nagivate("/login");
}


  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/splash">Splash</Link></li>
        <>
        <Link to="/login">Login</Link>
        <Link to="/login" onClick="return handleLogout">Logout</Link>
        </>
      </ul>
    </nav>
  );
};

export default NavigationBar;
