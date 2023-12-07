// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
