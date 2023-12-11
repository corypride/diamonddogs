import { removeUserFromLocalStorage } from "../Helpers/authHelpers";
import { auth } from '../Helpers/firebase';


const testUrl = "http://localhost:8080/plants/test"
const signupUrl = 'http://localhost:8080/users/signup';
const loginUrl = 'http://localhost:8080/plants/login';
  

export const getTest = (token) => {
    fetch(testUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => console.log(response));
}

export const signup = (data) => {
    fetch(signupUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => console.log(response));
}

export const login = (data) => {
    fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        return response.data
    });
}

export const logout = () => {
    auth.signOut();
    removeUserFromLocalStorage();
}