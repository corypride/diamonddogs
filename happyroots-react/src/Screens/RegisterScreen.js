import { useState } from "react";
import { signup } from "../Controllers/AuthController";
import { Link, useNavigate } from "react-router-dom";
import './styles/signup.css';

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [email,  setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [password2, setPassword2] = useState('');  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== password2) {
      alert("Passwords don't match!");
      setPassword('');
      setPassword2('');
      return;
    }

    if (password.length < 6) {
      alert('The password needs to be no less than 6 characters.');
      return;
    }
    
    const userData = {
      email: email,
      password: password,
    };

    try {
      await signup(userData);
      alert('User created successfully, you can login now')
      navigate('/login');
    } catch (error) {
      alert(error);
    }
    
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
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
        <p className="login-link">Got an account?  <Link to="/login">Login</Link></p>
      </header>
    </div>
  );
  
}

export default RegisterScreen;