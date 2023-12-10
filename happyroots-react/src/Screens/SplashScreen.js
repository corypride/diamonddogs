import React, { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/authHelpers';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import { Link } from 'react-router-dom';

import '../App.css';


const SplashScreen = () => {

    return (
        <>
        <NavigationBar />
        <div>
        </div>
      </>
    );
}


export default SplashScreen;