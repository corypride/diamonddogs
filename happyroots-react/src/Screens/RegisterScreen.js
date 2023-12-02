import { useState } from "react";
import '../App.css';
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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Register below:
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
          
          <label>
            Repeat password:
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <br />
          <button type="submit">Register</button>
        </form>
        <p>___________________________________</p>
        <Link to="/">Login</Link>
        <button onClick={handleTestClick}>
        Click me to test
      </button>
      </header>
      
    </div>
  );

}

export default RegisterScreen;