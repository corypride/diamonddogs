import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserFromLocalStorage } from "./Helpers/localStorageHelper";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";
import SearchScreen from "./Screens/SearchScreen";
import BrowseScreen from "./Screens/BrowseScreen";
import GardenScreen from "./Screens/GardenScreen";
import NotFound from "./Screens/NotFound";
import PlantScreen from "./Screens/PlantScreen";
import NavigationBar from "./Screens/Components/NavigationBar";
import "./App.css";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-BSEN65VMZT"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const [user, setUser] = useState(null);
  const token = user?.stsTokenManager?.accessToken;
  console.log("🚀 ~ App ~ token:", token)
  const navigate = useNavigate();
  const location = useLocation();
  console.log("🚀 ~ App ~ location:", location)

  
  const checkAuth = async () => {
    const alreadyLoggedInUser = getUserFromLocalStorage();
    if (alreadyLoggedInUser) {
      setUser(alreadyLoggedInUser);
    } else {
      // Redirect unauthenticated user to login page
      const unprotectedPathnames = ['/signup']
      if (!unprotectedPathnames.includes(location.pathname)) {
        return navigate("/login");
      }

      
    }
  };

  useEffect(() => {

      checkAuth();

  }, [location.pathname]);

  return (
    <div>
        {/* Only show NavigationBar when logged in */}
        {token && <NavigationBar />}
        <Routes>
          <Route path="/" element={<HomeScreen token={token} />} /> 
          <Route path="/login" element={<LoginScreen token={token} />} />
          <Route path="/signup" element={<RegisterScreen />} />
          <Route path="/favorites" element={<FavoritesScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/browse" element={<BrowseScreen />} />
          <Route path="/garden" element={<GardenScreen />} />
          <Route path="/plant/:id" element={<PlantScreen />} />
          {/* Handle bad route paths with 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      <ToastContainer position="bottom-left" />
    </div>
  );
}

export default App;
