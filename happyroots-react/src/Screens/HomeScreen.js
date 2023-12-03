import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/authHelpers';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Helpers/firebase';
import '../App.css';
import { getTest, logout } from '../Controllers/AuthController';

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
    <div className="App">
      <header className="App-header">
        <img src="https://cdn.openai.com/labs/images/A%20cat%20riding%20a%20motorcycle.webp?v=1" className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <br></br>
        <button onClick={handleClick}>Test</button>
        <button onClick={handleLogout}>Logout</button>
      </header>
    </div>
  );

}

export default HomeScreen;