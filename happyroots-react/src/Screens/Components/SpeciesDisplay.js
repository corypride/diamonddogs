import React, { useEffect, useState } from "react";
import { getSpeciesById } from "../../Controllers/PerenualApiController";
import { apiKey } from "../../Config/perenualApiKey";
import { deleteUserFavorite } from "../../Controllers/FavoritesController";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material/";

const SpeciesDisplay = ({ fave, refresh }) => {
  const [species, setSpecies] = useState(null);
  const [open, setOpen] = useState(false);

  const imgLink = "Images/no image found.jpg";

  useEffect(() => {
    fetchSpecies(fave.speciesId, apiKey);
  }, [fave]);

  const fetchSpecies = async (speciesId, apiKey) => {
    try {
      const responseData = await getSpeciesById(speciesId, apiKey);
      if (responseData) {
        setSpecies(responseData);
      }
    } catch (error) {
      console.error("Error fetching species:", error);
    }
  };

  const fetchDelete = async (id) => {
    try {
      const responseData = await deleteUserFavorite(id);
      if (responseData) {
        refresh();
        toast.success(
          `${species.common_name} has been deleted from the garden`
        );
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error(
        `Error deleting ${species?.common_name || "species"} from the garden`
      );
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    setOpen(false);
    fetchDelete(fave.id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!species) {
    return <p>Loading...</p>;
  }

  const { common_name, description, watering, cycle, sunlight, default_image } =
    species;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      <div
        className="divColor"
        key={fave.id}
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img
          src={default_image?.medium_url || default_image?.thumbnail || imgLink}
          alt={`${common_name} thumbnail`}
        />

        <div style={{ marginLeft: "20px" }}>
          <h3>Common Name: {common_name}</h3>
          <p>Description:</p> <p>{description}</p>
          <p>Cycle: {cycle}</p>
          <p>
            Sunlight:{" "}
            {species.sunlight.map((sun, index) => (
              <p key={index}>{sun} </p>
            ))}
          </p>
          <p>Watering: {watering}</p>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClickOpen();
              }}
            >
              Delete {common_name}
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Confirm Delete"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to delete {common_name} from garden?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleConfirmDelete} autoFocus>
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesDisplay;
