import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../Helpers/firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { saveUserToLocalStorage } from '../Helpers/authHelpers';
import './styles/login.css';
 
const LoginScreen = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log("_________\n\n\n")
            console.log(userCredential);

            console.log("_________\n\n\n")
            const user = userCredential.user;
            
            saveUserToLocalStorage(user);

            navigate("/")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
    return (
      <>
        <div className="App-header"> 
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