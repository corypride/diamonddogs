import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/localStorageHelper';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Helpers/firebase';
import { getTest, logout } from '../Controllers/AuthController';
import NavigationBar from './Components/NavigationBar';
import '../App.css';

const HomeScreen = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  
  
  const handleClick = () => {
    try {
      getTest(token);  
    } catch (error) {
      setError(error);
    }
    
  }

  const handleLogout = () => {
    auth.signOut();
    logout();
    navigate('/login')
  }
  
  useEffect(() => {
    const user = getUserFromLocalStorage();

    if (user) {
      setToken(user.stsTokenManager.accessToken);
    } else {
      console.log('User not logged in');
      navigate('/login');
    }
  }, [navigate]);

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
        <p>{error}</p>
        
    </div>
  </>
  );

}

export default HomeScreen;