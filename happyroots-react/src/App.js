import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";
import SearchScreen from "./Screens/SearchScreen";

function App() {

  return (
    <BrowserRouter>      
        <Routes>
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/signup" element={<RegisterScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/profile" element={<ProfileScreen />} />
          <Route exact path="/favorites" element={<FavoritesScreen />} />
          <Route exact path="/search" element={<SearchScreen />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
