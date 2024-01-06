import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, useHistory } from 'react-router-dom';
import { getUserFromLocalStorage } from './Helpers/authHelpers';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";
import SearchScreen from "./Screens/SearchScreen";
import BrowseScreen from "./Screens/BrowseScreen";
import GardenScreen from "./Screens/GardenScreen";
import NotFound from './Screens/NotFound';
import PlantScreen from './Screens/PlantScreen';


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
    <div>
    <BrowserRouter>      
        <Routes>
          <Route exact path="/" element={<HomeScreen token={token}/>} />
          <Route exact path="/login" element={<LoginScreen token={token}/>} />
          <Route exact path="/favorites" element={<FavoritesScreen />} />
          <Route exact path="/signup" element={<RegisterScreen />} />
          <Route exact path="/profile" element={<ProfileScreen />} />
          <Route exact path="/search" element={<SearchScreen />} />
          <Route exact path="/browse" element={<BrowseScreen />} />
          <Route exact path="/garden" element={<GardenScreen />} />
          <Route path="/plant/:id" element={<PlantScreen />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
    <ToastContainer position="bottom-left"/>

    </div>
  );
}

export default App;
