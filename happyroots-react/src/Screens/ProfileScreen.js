import React, { useEffect, useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import { getTokenAndUid} from '../Controllers/FavoritesController';
import '../App.css';
import useAuthentication from '../Hooks/useAuthentication';

const ProfileScreen = () => {
const user = useAuthentication();
const {email, uid} = user;
// const {token, uid } = getTokenAndUid();
console.log(user)


  return (
  <>
    <NavigationBar />
    <div>
        <p>Email: {email}</p>
        <p>user id = {uid}</p>
        <p>Phone Number:{user.phoneNumber}</p>
        <p>Photo URL:{user.photoURL}</p>
    </div>
  </>
  );

}

export default ProfileScreen;