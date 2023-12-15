export const saveUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};
      
export const getUserFromLocalStorage = () => {
    const userString = localStorage.getItem('user');
    
    if (userString) {
      const user = JSON.parse(userString);
  
      // TODO : token expiration
      const isTokenExpired = user.tokenExpiration && Date.now() > user.tokenExpiration;

      if (isTokenExpired) {
        removeUserFromLocalStorage(); 
        return null;
      }
  
      return user;
    }
  
    return null;
};

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
};  
