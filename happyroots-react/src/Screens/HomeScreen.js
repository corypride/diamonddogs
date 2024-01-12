import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Helpers/firebase';
import { getTest, logout } from '../Controllers/AuthController';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getTokenAndUid } from '../Controllers/FavoritesController';


const HomeScreen = () => {
  const {token, uid} = getTokenAndUid() || {};
  const navigate = useNavigate();
  
  const handleClick = () => {
    getTest(token);
    console.log("token : " + token)
    console.log("uid : "+ uid)
  }

  const handleLogout = () => {
    auth.signOut();
    logout();
    navigate('/login')
  }
  
  return (
  <>
    <div>
      
        {/* <img src="https://cdn.openai.com/labs/images/A%20cat%20riding%20a%20motorcycle.webp?v=1" className="App-logo" alt="logo" /> */}
        <img src="Images/nEVyjJPV.jpg" className="App-logo" style={{borderRadius: "50vw"}}/>
        <br></br>
        <br></br>
        <br></br>
        <ul id="buttons">
          <li className="newbutton"><button onClick={handleClick}>Test</button></li>
          <li className="newbutton"><button onClick={logout}>Logout</button></li>
        </ul>
        
    </div>
  </>
  );

}

export default HomeScreen;