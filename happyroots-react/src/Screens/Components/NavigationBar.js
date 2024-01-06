// NavigationBar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import useAuthentication from "../../Hooks/useAuthentication";

import { login, logout } from "../../Controllers/AuthController";
import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "../../Helpers/authHelpers";
import { alignProperty } from "@mui/material/styles/cssUtils";

const NavigationBar = () => {
  const user = useAuthentication();
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
    <nav
      className="navDiv"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <img
        src="Images/nEVyjJPV.jpg"
        style={{ height: "10vh", borderRadius: "50%" }}
      ></img>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
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
      </ul>
      {!user ? (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            {/* <Link to="/" onClick={logout}>
            Logout
          </Link> */}
            <Link
              to="/"
              onClick={(e) => {
                if (window.confirm("Are you sure you want to log out?")) {
                  logout();
                } else {
                  e.preventDefault();
                }
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;
