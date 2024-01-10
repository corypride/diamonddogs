// NavigationBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import useAuthentication from '../../Hooks/useAuthentication';

import { login, logout } from '../../Controllers/AuthController';
import { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../../Helpers/authHelpers';

const NavigationBar = () => {
  const user = useAuthentication();
  // const navigate = useNavigate();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const user = getUserFromLocalStorage();

  //   if (!user) {
  //     console.log("User not logged in");
  //     navigate("/login");
  //     return;
  //   } else if (user.providerData && user.providerData.length > 0) {
  //     console.log("User:", user);
  //     setUser(user.providerData[0]);
  //   } else {
  //     console.log("User data not available");
  //   }
  // }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/browse">Browse</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/garden">Garden</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {!user ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
