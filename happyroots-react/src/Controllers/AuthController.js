import { removeUserFromLocalStorage } from "../Helpers/localStorageHelper";
import { auth } from '../Helpers/firebase';

const testUrl = "http://localhost:8080/plants/test"
const signupUrl = 'http://localhost:8080/users/signup';
const loginUrl = 'http://localhost:8080/plants/login';
const updateImageUrl = 'http://localhost:8080/users/changeUserImage';
const updateUsernameUrl = 'http://localhost:8080/users/changeUsername';
  

export const getTest = (token) => {
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
    //TODO:?

    removeUserFromLocalStorage();
    window.location.reload();

}

export const updateDisplayImage = async (token, image) => {
    const formData = new FormData();
    formData.append('image', image);

    try {
        const response = await fetch(updateImageUrl, {
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
        const response = await fetch(updateUsernameUrl, {
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
