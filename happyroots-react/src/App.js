import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import NotFound from './Screens/NotFound';
import "./App.css";
import React from 'react';



function App() {

  return (
    <BrowserRouter>      
        <Routes>
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/signup" element={<RegisterScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/profile" element={<ProfileScreen />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>

    /*<div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>*/

  );
}
/*
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
*/

export default App;
