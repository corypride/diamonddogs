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
  const {uid, token} = getTokenAndUid();

  
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
        getUserFavorites();
      }

      const [data, setData] = useState(null);
    

    //   const fetchFavorites = async () => {
    //     const data = await getUserFavorites(token, uid)
    //     if (data) {
    //         setData(data)
    //     }
    // }

    


    

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