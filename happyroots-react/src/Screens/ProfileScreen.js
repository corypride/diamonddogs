import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/localStorageHelper';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import { updateUser } from '../Controllers/AuthController';
import './styles/profile.css';

const ProfileScreen = () => {
    const [user, setUser] = useState({});
    const [username, setUsername] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = getUserFromLocalStorage();

        if (userData) {
            console.log('User:', userData);
            setUser(userData.providerData[0]);
            setUsername(userData.providerData[0].displayName || '');
            setPhotoUrl(userData.providerData[0].photoURL || '');
        } else {
            console.log('User not logged in');
            navigate('/login');
        }
    }, [navigate]);

    const enterEditMode = () => {
        setIsEditMode(true);
    };

    const exitEditMode = () => {
        setIsEditMode(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'photoUrl') {
            setPhotoUrl(value);
        }
    };

    const saveChanges = async () => {
        try {
            const updatedUser = await updateUser({
                'username': username,
                'photoUrl': photoUrl
            });

            user.displayName = username
            user.photoURL = photoUrl

            exitEditMode();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <>
          <NavigationBar />
          <div className="container">
            <div className="user-info">
              <p>Email: {user.email}</p>
              <p>Username: {user.displayName}</p>
      
              {user.photoURL && (
                <img className="user-info-img" src={user.photoURL} alt="User Avatar" />
              )}
      
              {isEditMode ? (
                <>
                  <label className="edit-mode-label">
                    Username: <input type="text" name="username" value={username} onChange={handleInputChange} className="edit-mode-input" />
                  </label>
                  <label className="edit-mode-label">
                    Photo URL: <input type="text" name="photoUrl" value={photoUrl} onChange={handleInputChange} className="edit-mode-input" />
                  </label>
                  <button onClick={saveChanges} className="edit-buttons-button">Save</button>
                  <button onClick={exitEditMode} className="edit-buttons-button cancel">Cancel</button>
                </>
              ) : (
                <button onClick={enterEditMode} className="edit-buttons-button">Edit</button>
              )}
            </div>
          </div>
        </>
      );
      
}

export default ProfileScreen;
