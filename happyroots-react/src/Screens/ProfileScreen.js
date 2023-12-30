import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/authHelpers';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import { Link } from 'react-router-dom';
import { getUserFavorites, getTokenAndUid} from '../Controllers/FavoritesController';



import '../App.css';

const ProfileScreen = () => {

    const [user, setUser] = useState("");
    const navigate = useNavigate();
  const {uid, token} = getTokenAndUid() || {};

  
//     useEffect(() => {

//         const loggedInUser = getUserFromLocalStorage();


// if (loggedInUser && loggedInUser.providerData && loggedInUser.providerData[0]) {
//     console.log('User:', loggedInUser);
//     setUser(loggedInUser.providerData[0]);
// } else {
//     console.log('User not logged in');
//     navigate('/login');
// }
//     }, []);

useEffect(() => {
  const user = getUserFromLocalStorage();

  if (!user) {
    console.log('User not logged in');
    navigate('/login');
    return;
  } else if (user.providerData && user.providerData.length > 0) {
    console.log('User:', user);
    setUser(user.providerData[0]);
  } else {
    console.log('User data not available');
    // Handle the case where user.providerData is undefined or empty
  }
}, []);



  return (
  <>
    <NavigationBar />
    <div>
        <p>Email: {user.email}</p>
        <p>user id = {uid}</p>
        <p>Phone Number:{user.phoneNumber}</p>
        <p>Photo URL:{user.photoURL}</p>
    </div>
  </>
  );

}

export default ProfileScreen;