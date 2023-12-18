import { removeUserFromLocalStorage, saveUserToLocalStorage } from "../Helpers/localStorageHelper";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Helpers/firebase';

const baseUrl = 'http://localhost:8080';
const testUrl = '/plants/test';
const signupUrl = '/users/signup';
const updateUrl = '/users/update';
  
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    saveUserToLocalStorage(user);
  
    return user;

  } catch (error) {

    console.error(error.code, error.message);
    throw error;
  }
};

export const signup = async (data) => {
    data['username'] = '';
    data['photoUrl'] = '';
    
    await fetch(`${baseUrl}${signupUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => console.log(response));
}

export const logout = () => {
    //TODO:?

    removeUserFromLocalStorage();
}

export const updateUser = async (user, image) => {
    
    const formData = new FormData();
    formData.append('user', user);
    formData.append('image', image);

    await fetch(`${baseUrl}${updateUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.stsTokenManager.accessToken}`
        },
        body: formData,
    })
}

export const getTest = (token) => {
    fetch(`${baseUrl}${testUrl}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => console.log(response));
}
