import React, { useState, useEffect } from "react";
import NavigationBar from "./Components/NavigationBar";
import "../App.css";
import {
  getSpeciesById,
  getAllSpecies,
  saveFavorites,
} from "../Controllers/PerenualApiController";
import { apiKey } from "../Config/perenualApiKey";
import { mockData, speciesList } from "../Controllers/mockData";
import { saveUserFavorites } from "../Controllers/FavoritesController";
import { Alert, Box } from "@mui/material";
import { toast } from "react-toastify";

const BrowseScreen = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const dataList = data.data;

  console.log("in state page", page);

  useEffect(() => {
    document.body.onLoad = fetchSpecies();
  }, [page]); // refire when page value changes

  const fetchSpecies = async () => {
    const responseData = await getAllSpecies(apiKey, page);
    if (responseData) {
      setData(responseData);
    }
  };

  const fetchSave = async (data) => {
    try {
      const responseData = await saveUserFavorites(data);
      return responseData;
    } catch (error) {
      console.error("Error saving user favorites:", error);
      throw error;
    }
  };

  const handleSave = async (data) => {
    try {
      const response = await fetchSave(data);

      if (response) {
        await fetchSpecies();
        toast.success(`${data.common_name} has been saved to your garden`, {
          className: 'toastify-success',
        });
      }

    } catch (error) {
      console.error("Error saving data:", error);
      toast.error(`Error saving ${data.common_name} to the garden. Please try again.`, {
        className: 'toastify-error',
      });
    }
  };

  const handleNextPage = () => {
    const newPage = page + 1;
    if (page > 99) {
      return;
    }
    setPage(newPage);
  };

  const handlePreviousPage = () => {
    const newPage = page - 1;
    if (page < 1) {
      return;
    }
    setPage(newPage);
  };

  return (
    <>
      <NavigationBar />
      <div>
        <h2>Plant Species</h2>

        {/* BUTTONS */}
        <button onClick={() => handlePreviousPage()}>Previous Page</button>
        <button onClick={() => handleNextPage()}>Next Page</button>
        <br></br>
        <br></br>

        {/* LIST */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', }}>
          {dataList?.map((species) => (
            <div key={species.id} style={{ width: '33%', marginBottom: '20px', boxSizing: 'border-box', border: '30px' }}>
              <img src={species.default_image?.regular_url || species.default_image?.orignal_url || species.default_image?.medium_url || species.default_image?.small_url || species.default_image?.thumbnail || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAS1BMVEXMzMx/f3/Q0NB5eXnIyMiVlZWEhITAwMCLi4vR0dF8fHy0tLSjo6OysrLDw8Obm5t1dXWsrKyWlpampqa6urqtra2Ojo6fn59vb28EtcIDAAAFL0lEQVR4nO2bCZejKhBGpRAVUNxQ3///pa9wSUdjejJ9Mp1ovnvOTBYpZriylAajCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnAqK0+cQ06ub8lOolM+iPKgEGqQwz0HI4ZgSSAqhnoMQ8pgOYikyTc9AZ0LGr27OjwgOnnP2CA4+ycHU8fcOfIoDits+yZpix8KnOKBc8hoojBT+JuhDHJDilXRCdtuoz3DAvUBckOkm7DMcxFcKxE3YRzig1lw7kOnm8Ec46FcOzGZG+AwHiVg5yOHAtKd3cJsNklrPB8XZHZBXWeNWR6hbzwebBp/OgR6k4XRwkw2uFGzvGp3NwZIQrhMh8tcJwk3MyRxkS683awmdnA8Y4U6dK5NLvga+WbWV0p4vmow05W1NZ3JAqVjNfWsJlHZtW+zdRj+RA7IrA0IkmwbfuYVyIgdUy7UCYZLHWnYaB6vL47+TcBYH1NwqYAnZIzWdxUFvdhTcl0BaX/k7gwOKk30FLKHfWwicMrxILkfO4IDXxPvsSOAFJNxeTZa18wQOyN/rBJOEZptJLbOnsbPDwzvgNPg7BVsJFH9NHXK6kXB4B3tr4obrX9bXuaRsxu8O7oDKPyrgpuZ6DtomUibjXPLYDvS9NfGehJsswghPx3YQ3V0TtxJaHZbEbKe4qQ+9/yB5VAFLqPW0JO51kiM7+BtMfXfyZDOf4UDsd4KZD3HwLXAAB3AAB3AAB3AAB3AAB3AABydzQA/fO3gAc8znWG5/Y/05sj6mg4iKLHkOWXFQBWE/wbtVBAAAAIBfJXZ/WTL90yWAc9eVLsXTO6XfACrkoyXtWFJX9vvMh8pG55eNOlT58dX999P/4b+HrOC/wlbTaN5tOu86Hb/5+jiXZAfS0uXL6XV6e/kYx5QrmmrgKzA/vrpqrvMNCS2jNm1VR7Vqw+/og2o8t9Kq0uVhR874MVo58NbzUf7QqRDTpuFKy8+hZG1wQL5Ug2MHduC6Rwf8L5S3T8O+ntAyLZK2ln1ZiJxc1fq88tSZoksq7tiZLcR49fflQOdCFT27U5m1idJlOOtVuoSWpc6VLmTnleS6TWuTgeuNqO89V/t+EkYHSa5102tdZ9rzW53UJCxRUUWpIa2dXEpGs4NEUyxdVMZaF0KnkrtLEkKJQ/UwOqgLrSOZajNocjJ2FXnBVac3T3q8nqkfcIObnKjOeMAWrTJ1HG4A8bmrk6EsyyqNVmMhDzvSTBppXw8J+0gKnbUcakPo5IC06/I+OAi9X3h2kE91PbwO/RobB3xO+9wndVwtDmxRFHZc37wZA6QfHcQmpV6UXSs05T2Xpzl07gedbFo7O6DJQc91Wfva9u6xdtBrxV2XDI+FMLlV3O4wl9dj0bgKU7zn1k4OXFpx528FT3iy5R40horFgfA8iCp2UBOPmzAWeNRc6noryJrJgRrGfjAkLlWy5SmtKASP86x3rk+mhaGRrW1lSTTwJBhLngSLuDMibMKrCv52Dp3mxKyMfSa9Nsa7rBnnRNG4NNvb5/xqfMOTv+f1seMTP1BUiswXOWnflD6s6Tzgh7koO0oyXiOoC/tQlSPLx2LlwkIajs+hdU1FS04J5XKrG9snOXcVLhFzXfnrWvoNtOQ3y58x01GO53BJ6wd16JI/zXFfidTlcEigloqmt7QUv/vQz3tCTdLV5qh3hZ8EFcPwjjndr3KobgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCv8T8P0EKx6h83/QAAAABJRU5ErkJggg=="} alt={species.common_name} style={{ width: '100%', borderRadius: '8px' }} />
              <p>Common Name : {species.common_name}</p>
              <p>Cycle : {species.cycle}</p>
              <p>Sunlight : {species.sunlight}</p>
              <p>Watering : {species.watering}</p>
              <div>
                <button onClick={() => handleSave(species)}>
                  Save {species.common_name} to garden
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <button onClick={() => handlePreviousPage()}>Previous Page</button>
        <button onClick={() => handleNextPage()}>Next Page</button>
      </div>
    </>
  );
};

export default BrowseScreen;
