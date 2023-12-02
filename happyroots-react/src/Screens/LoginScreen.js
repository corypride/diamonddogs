import { useState } from "react";
import '../App.css';
import { Link, Navigate } from "react-router-dom";
import { login } from "../Controllers/AuthController";

const LoginScreen = () => {
  const [email,  setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    
    const userData = {
      email: email,
      password: password,
    };

    login(userData).then(response => {
      Navigate("/home");
    });
      
    
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <div className="col-md-6 offset border rounded shadow">
        <p>
          Login below:
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <p>___________________________________</p>
        
      <Link to="/register">Register</Link>
        </div>
        
      </header>
      
    </div>
  );

}

export default LoginScreen;