import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {

  return (
    <BrowserRouter>      
        <Routes>
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/signup" element={<RegisterScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
