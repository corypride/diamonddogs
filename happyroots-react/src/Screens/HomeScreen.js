import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/authHelpers';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Helpers/firebase';
import { getTest, logout } from '../Controllers/AuthController';
import NavigationBar from './Components/NavigationBar';
import '../App.css';

const HomeScreen = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  
  const handleClick = () => {
    getTest(token);
  }

  const handleLogout = () => {
    auth.signOut();
    logout();
    navigate('/login')
  }
  
  useEffect(() => {
    const user = getUserFromLocalStorage();

    if (user) {
      console.log('User:', user);
      setToken(user.stsTokenManager.accessToken);
    } else {
      console.log('User not logged in');
      navigate('/login');
    }
  }, []);

  return (
  <>
    <NavigationBar />
    <div>
      
        <img src="https://cdn.openai.com/labs/images/A%20cat%20riding%20a%20motorcycle.webp?v=1" className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <br></br>
        <ul id="buttons">
          <li class="newbutton"><button onClick={handleClick}>Test</button></li>
          <li class="newbutton"><button onClick={handleLogout}>Logout</button></li>
        </ul>
        
        
    </div>
  </>
  );

}

export default HomeScreen;