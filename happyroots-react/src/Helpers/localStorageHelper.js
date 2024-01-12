export const saveUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};
      
// export const getUserFromLocalStorage = () => {
//     const userString = localStorage.getItem('user');
    
//     if (userString) {
//       const user = JSON.parse(userString);
//       console.log('User from local storage:', user);
  
//       // TODO : token expiration
//       const isTokenExpired = user.tokenExpiration && Date.now() > user.tokenExpiration;

//       if (isTokenExpired) {
//         removeUserFromLocalStorage(); 
//         return null;
//       }
  
//       return user;
//     }
  
//     return null;
// };

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
};  


// Function to get user data from local storage
export const getUserFromLocalStorage = () => {
  try {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      return user;
    }
    return null; // Return null or handle the case where userString is undefined
  } catch (error) {
    console.error('Error parsing user data from local storage:', error.message);
    return null; // Return null or handle the error as needed
  }
};

// Function to get token and UID
const getTokenAndUid = () => {
  const user = getUserFromLocalStorage();
  if (user) {
    const { refreshToken, uid } = user.stsTokenManager;
    return { refreshToken, uid };
  }
  return null;
};

// // Function to get token before API calls to place into header
// export const authenticatedFetch = async (url, options = {}) => {
//   const token = await auth.currentUser?.getIdToken(true);
//   if (!token) {
//     throw new Error('User token is not available');
//   }

//   // Set up headers
//   const headers = new Headers(options.headers || {});
//   headers.append('Authorization', `Bearer ${token}`);

//   // Create the full options object, including the headers
//   const fetchOptions = {
//     ...options,
//     headers,
//   };

//   // Perform the fetch call with the token
//   const response = await fetch(url, fetchOptions);
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   return response.json();
// };

