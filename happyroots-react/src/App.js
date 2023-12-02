import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {

  return (
    <BrowserRouter>      
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/home" element={<HomeScreen />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
