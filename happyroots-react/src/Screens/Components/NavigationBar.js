// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Favorites</Link></li>
        <li><Link to="/">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
