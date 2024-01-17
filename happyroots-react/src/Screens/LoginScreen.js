import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import './styles/login.css';
import { login } from '../Controllers/AuthController';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { saveUserToLocalStorage } from '../Helpers/localStorageHelper';
import { auth } from '../Helpers/firebase';
 
const LoginScreen = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            
            saveUserToLocalStorage(user);

              console.log('User after login:', user);

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
        <div className="login-form"> 
          <p>Happy Roots</p>                       
          <form>                                             
            <div>
              <label htmlFor="email-address">Email address</label>
              <input
              className="inputBar"
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
              className="inputBar"
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
              {/* <button onClick={login}>Login</button> */}
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