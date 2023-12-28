import { removeUserFromLocalStorage, saveUserToLocalStorage } from "../Helpers/localStorageHelper";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Helpers/firebase';

const baseUrl = 'http://localhost:8080';
const testUrl = '/plants/test';
const signupUrl = '/users/signup';
const updateImageUrl = '/users/changeUserImage';
  
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

export const updateDisplayImage = async (token, image) => {
    const formData = new FormData();
    formData.append('image', image);

    try {
        const response = await fetch(`${baseUrl}${updateImageUrl}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to update avatar');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating avatar:', error.message);
        throw error;
    }
}

export const updateUsername = async (token, username) => {
    const formData = new FormData();
    formData.append('username', username);
    
    try {
        const response = await fetch(`${baseUrl}${updateImageUrl}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to update user');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating user:', error.message);
        throw error;
    }
}

export const getTest = (token) => {
    fetch(`${baseUrl}${testUrl}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => console.log(response));
}
