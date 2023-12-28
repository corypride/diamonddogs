import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage, saveUserToLocalStorage } from '../Helpers/localStorageHelper';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import { updateDisplayImage, updateUsername } from '../Controllers/AuthController';
import './styles/profile.css';

const ProfileScreen = () => {
    const [user, setUser] = useState({});
    const [username, setUsername] = useState('');
    const [image, setImage] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
      var userData = getUserFromLocalStorage();

      if (userData) {
        setUser(userData.providerData[0]);
        setUsername(userData.displayName || '');
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
  
  const updateImage = async () => {
    try {
        var userData = getUserFromLocalStorage();
        const updatedUser = await updateDisplayImage(userData.stsTokenManager.accessToken, image);
        
        userData.providerData[0].photoURL = updatedUser.photoUrl;

        setUser(userData.providerData[0])
        
        saveUserToLocalStorage(userData);

        exitEditMode();
    } catch (error) {
        console.error('Error updating user:', error);
    }
  };

  const updateUsername = async () => {
    try {
      var userData = getUserFromLocalStorage();
      const updatedUser = await updateUsername(userData.stsTokenManager.accessToken, username);
      userData.providerData[0].displayName = updatedUser.displayName;

      setUser(userData.providerData[0])
      
      saveUserToLocalStorage(userData);

      exitEditMode();
    } catch (error) {
      console.log('\n___________')
      console.log(error)
    }
  }

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
                  <button onClick={updateUsername} className="edit-buttons-button">Change username</button>
                  <br />


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
                        setImage(event.target.files[0]);
                      }}
                    />
                  </div>
                  
                  <button onClick={updateImage} className="edit-buttons-button">Change user image</button>
                  <br />

<br />

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
