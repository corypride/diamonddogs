import { removeUserFromLocalStorage } from "../Helpers/authHelpers";
import { auth } from '../Helpers/firebase';
import { getTokenAndUid } from "./FavoritesController";

//  changed 'plants' route name
const testUrl = "http://localhost:8080/auth/test"
const signupUrl = 'http://localhost:8080/auth/signup';
const loginUrl = 'http://localhost:8080/auth/login';
const {token, uid} = getTokenAndUid();
  

export const getTest = () => {
    fetch(testUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
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

export const signup = (data) => {
    fetch(signupUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => console.log(response));
}

export const logout = () => {
    auth.signOut();
    removeUserFromLocalStorage();
}