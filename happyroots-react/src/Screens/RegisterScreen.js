import { useState } from "react";
import './styles/signup.css';
import { getTest, signup } from "../Controllers/AuthController";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [email,  setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [password2, setPassword2] = useState('');  

  
  const handleTestClick = () => {
    getTest();
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== password2) {
      alert("Passwords don't match!");
      return;
    }
    
    const userData = {
      email: email,
      password: password,
    };

    signup(userData);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <p className="header-text">Register below:</p>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="password2">Repeat password:</label>
            <input
              type="password"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </div>
  
          <button type="submit">Register</button>
        </form>
        <hr className="divider" />
        <p className="login-link">
          <Link to="/">Login</Link>
        </p>
        <button onClick={handleTestClick} className="test-button">
          Click me to test
        </button>
      </header>
    </div>
  );
  
}

export default RegisterScreen;