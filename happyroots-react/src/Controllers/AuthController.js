import { removeUserFromLocalStorage, saveUserToLocalStorage } from "../Helpers/authHelpers";
import { auth } from '../Helpers/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

//  changed 'plants' route name
const testUrl = "http://localhost:8080/auth/test"
const signupUrl = 'http://localhost:8080/auth/signup';
const loginUrl = 'http://localhost:8080/auth/login';
  

export const getTest = (token) => {
    fetch(testUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => console.log(response));
}


export const login = async (credentials) => {
  try {
    const { email, password } = credentials;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};

// export const login = (data) => {
//     fetch(loginUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     }).then(response => {
//         return response.data
//     });
// }

export const signup = async (userData, onSuccessCallback) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, userData.email, userData.password);

        // Update the user profile (optional)
        await updateProfile(response.user, { displayName: userData.displayName });

        // Retrieve the full Firebase user data
        const fullUserData = {
            uid: response.user.uid,
            email: response.user.email,
            displayName: response.user.displayName,
            // Add any other user properties you need
        };

        // Save the full user data to local storage
        saveUserToLocalStorage(fullUserData);
        console.log('User saved to local storage:', fullUserData);

        // Call the provided success callback for redirection
        onSuccessCallback();
        console.log('Redirecting to home...');

        // Return the full user data
        return fullUserData;
    } catch (error) {
        console.error("Signup failed:", error.message);
        throw error;
    }
};

// export const signup = async (userData, onSuccessCallback) => {
//     try {
//       const response = await fetch(signupUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });
  
//       if (response.ok) {
//         // Save user to local storage
//         saveUserToLocalStorage(userData);
//         console.log('User saved to local storage:', userData);
  
//         // Log in the user
//         const { email, password } = userData;
//         await signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           const user = userCredential.user;
          
//           saveUserToLocalStorage(user);

//           // Call the provided success callback for redirection
//           onSuccessCallback();
//           console.log('Redirecting to home...');
//         });
  

  
//         // Return success or user data if needed
//         return userData;
//       } else {
//         throw new Error('Signup failed');
//       }
//     } catch (error) {
//       console.error("Signup failed:", error.message);
//       throw error;
//     }
//   };

export const logout = () => {
    auth.signOut();
    removeUserFromLocalStorage();
    window.location.reload();

}