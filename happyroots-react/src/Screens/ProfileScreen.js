import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/localStorageHelper';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import { updateUser } from '../Controllers/AuthController';
import './styles/profile.css';

const ProfileScreen = () => {
    const [user, setUser] = useState({});
    const [username, setUsername] = useState('');
    const [photoUrl, setPhotoUrl] = useState();
    const [image, setImage] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = getUserFromLocalStorage();

        if (userData) {
            console.log('User:', userData);
            setUser(userData.providerData[0]);
            setUsername(userData.displayName || '');
            setPhotoUrl(userData.photoURL || '');
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
      
      if (name === 'username' && value.length > 0) {
          setUsername(value);
      }
  };
  

    const saveChanges = async () => {
        try {
            await updateUser(username, image);

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
      
              <img 
                className="user-info-img" 
                src={
                  user.photoURL 
                  ? user.photoURL 
                  : 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'
                } 
                alt="User Avatar" 
              />
              
              {isEditMode ? (
                <>
                  <label className="edit-mode-label">
                    Username: <input type="text" name="username" value={username} onChange={handleInputChange} className="edit-mode-input" />
                  </label>
                  <label className="edit-mode-label">
                    Photo: 
                  </label>

                  <br />
                  {image && (
                    <div>
                      <img alt="not found" src={URL.createObjectURL(image)} />
                      <br />
                      <button onClick={() => setImage(null)}>Remove</button>
                    </div>
                  )}
                  <div style={{ display: "flex" }}>
                    <input
                      type="file" // TODO: add style
                      name="myImage"
                      onChange={ (event) => {
                        console.log(event.target.files[0]);
                        setImage(event.target.files[0]);
                      }}
                    />
                  </div>
                  <br />

                  <br />

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
