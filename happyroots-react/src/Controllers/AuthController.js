import { getUserFromLocalStorage, removeUserFromLocalStorage, saveUserToLocalStorage } from "../Helpers/authHelpers";
import { auth } from '../Helpers/firebase';


const baseUrl = 'http://localhost:8080';
const testUrl = '/plants/test';
const signupUrl = '/users/signup';
const updateUrl = '/users/update';
  

export const getTest = (token) => {
    fetch(`${baseUrl}${testUrl}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => console.log(response));
}

export const signup = (data) => {
    data['username'] = '';
    data['photoUrl'] = '';
    
    fetch(`${baseUrl}${signupUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => console.log(response));
}

export const login = () => {
    
}

export const logout = () => {
    auth.signOut();
    removeUserFromLocalStorage();
}

export const updateUser = async (userData) => {
    
    var user = getUserFromLocalStorage();

    const response = await fetch(`${baseUrl}${updateUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.stsTokenManager.accessToken}`
        },
        body: JSON.stringify(userData),
    })

    
    // .then(response => {
    //     console.log(response.data);
    //     removeUserFromLocalStorage();
    //     saveUserToLocalStorage(response.data)

    //     // return response.data
    // });
}