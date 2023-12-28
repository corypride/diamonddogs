import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/authHelpers';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import { Link } from 'react-router-dom';
import { getUserFavorites } from '../Controllers/FavoritesController';



import '../App.css';

const ProfileScreen = ({token, uid}) => {

    const [user, setUser] = useState("");
    const navigate = useNavigate();
  
    useEffect(() => {
        const user = getUserFromLocalStorage();

        if (user) {
            console.log('User:', user);
            setUser(user.providerData[0]);
        } else {
            console.log('User not logged in');
            navigate('/login');
        }
    }, []);



    const handleUID = () => {
        getUserFavorites(token, uid);
        console.log(uid)
        console.log(token)
      }

      const [data, setData] = useState(null);
    

    //   const fetchFavorites = async () => {
    //     const data = await getUserFavorites(token, uid)
    //     if (data) {
    //         setData(data)
    //     }
    // }



    
    const userId = uid;

  return (
  <>
    <NavigationBar />
    <div>
        <p>Email: {user.email}</p>
        <p>user id = {uid}</p>
        <p>Phone Number:{user.phoneNumber}</p>
        <p>Photo URL:{user.photoURL}</p>
        {/* <p><button onClick={handleUID}>get favorites by user id</button></p> */}
    </div>
  </>
  );

}

export default ProfileScreen;