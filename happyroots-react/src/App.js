import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, useHistory } from 'react-router-dom';
import { getUserFromLocalStorage } from './Helpers/authHelpers';

import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";
import SearchScreen from "./Screens/SearchScreen";
import SplashScreen from "./Screens/SplashScreen";

function App() {
  const [user, setUser] = useState(null);
  const token = user?.stsTokenManager?.accessToken

  useEffect(() => {
    const alreadyLoggedInUser = getUserFromLocalStorage();
    if (alreadyLoggedInUser) {
      setUser(alreadyLoggedInUser)
    } else {
      console.log('User not logged in');
    }
  }, []);

  return (
    <BrowserRouter>      
        <Routes>
          <Route exact path="/splash" element={<SplashScreen />} />
          <Route exact path="/" element={<HomeScreen token={token}/>} />
          <Route exact path="/login" element={<LoginScreen token={token}/>} />
          <Route exact path="/favorites" element={<FavoritesScreen uid={user?.uid} token={token}/>} />
          <Route exact path="/signup" element={<RegisterScreen />} />
          <Route exact path="/profile" element={<ProfileScreen />} />
          <Route exact path="/search" element={<SearchScreen />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
