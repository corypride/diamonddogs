import React, { useState } from "react";
import { getTest, signup, login } from "../Controllers/AuthController";
import { Link } from "react-router-dom";
import "./styles/signup.css";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTestClick = () => {
    getTest();
  };

  const handleLoginAfterSignup = async (email, password) => {
    try {
      setLoading(true);

      // Call the login function with the email and password
      const loggedInUser = await login({ email, password });
      console.log("User logged in after signup:", loggedInUser);

      // Save the user data to local storage
      localStorage.setItem("user", JSON.stringify(loggedInUser));

      // Reset form and loading state on successful signup
      setEmail("");
      setPassword("");
      setPassword2("");
    } catch (error) {
      console.error("Login after signup failed:", error.message);
      alert("Login after signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("Passwords don't match!");
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    try {
      setLoading(true);

      // Call the signup function with the navigate callback
      const user = await signup(userData, () => navigate("/"));
      console.log("User after signup:", user);

      // Call the login function after signup to automatically log in
      handleLoginAfterSignup(email, password);
    } catch (error) {
      console.error("Signup failed:", error.message);
      alert("Signup failed. Please try again.");
    } finally {
      setLoading(false);
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
          <Link to="/login">Login</Link>
        </p>
        <button onClick={handleTestClick} className="test-button">
          Click me to test
        </button>
      </header>
    </div>
  );
};

export default RegisterScreen;
