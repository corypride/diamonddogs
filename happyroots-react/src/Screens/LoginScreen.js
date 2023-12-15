import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import './styles/login.css';
import { login } from '../Controllers/AuthController';
 
const LoginScreen = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = async (e) => {
      e.preventDefault();
    
      if (email === '' || password === '') {
        alert('Something empty');
        return;
      }
    
      try {
        await login(email, password);
        navigate('/');
      } catch (error) {
        alert(error);
      }
    };
    
    return (
      <>
        <div className="login-form"> 
          <p>Happy Roots</p>                       
          <form>                                             
            <div>
              <label htmlFor="email-address">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"                                    
                required                                                                                
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
    
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"                                    
                required                                                                                
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
                                                
            <div>
              <button onClick={onLogin}>Login</button>
            </div>                               
          </form>
          <p className="text-sm text-white text-center">
            No account yet? {' '}
            <NavLink to="/signup">
              Sign up
            </NavLink>
          </p>                         
        </div>
      </>
    );
}    
 
export default LoginScreen