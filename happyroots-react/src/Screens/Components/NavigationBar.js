// NavigationBar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import useAuthentication from "../../Hooks/useAuthentication";
import { logout } from "../../Controllers/AuthController";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material/";

const NavigationBar = () => {
  const user = useAuthentication();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleConfirmLogout = () => {
    setOpen(false);
    logout();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-around" }}>
      <img
        src="Images/nEVyjJPV.jpg"
        style={{ height: "10vh", borderRadius: "50%" }}
      ></img>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/browse">Browse</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/garden">Garden</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      {!user ? (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <>
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleClickOpen();
                }}
              >
                Logout
              </Link>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Confirm Logout"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to log out?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleConfirmLogout} autoFocus>
                    Logout
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;
