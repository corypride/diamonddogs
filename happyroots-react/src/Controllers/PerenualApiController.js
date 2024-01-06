import { apiKey } from "../Config/perenualApiKey";
import { auth } from '../Helpers/firebase.js';
// import { authenticatedFetch } from "../Helpers/authHelpers.js";

const baseUrl = "http://localhost:8080";
const perenualUrl = "https://perenual.com/api";

const getToken = async () => {
  return auth.currentUser?.getIdToken(true);
};


export const getSpeciesById = async (speciesId, apiKey) => {

  try {
    const response = await fetch(
      perenualUrl + `/species/details/${speciesId}?key=${apiKey}`,
    );

    if (!response.ok) {
      throw Error;
    }

    const data = await response.json();
    // console.log(data)
    return data;
  } catch {
    return null;
  }
};

export const getAllSpecies = async (page) => {
  const token = await getToken();

  if (!token) {
      console.error('No Firebase token available');
      return null;
  }
  console.log('Requesting URL:', `${baseUrl}/specieslist?page=${page}`);

  try {
      const response = await fetch(
          `${baseUrl}/specieslist?page=${page}`, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          }
      );

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching species:', error);
      return null;
    }
};

export const getCareInformation = async  (speciesId) => {
  const token = await getToken();

  if (!token) {
    console.error('No Firebase token available');
    return null;
  }
  console.log('Requesting URL:', `${baseUrl}/careinfo/species/${speciesId}`);

try {
    const response = await fetch(
      `${baseUrl}/careinfo/species/${speciesId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
      }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
    const data = await response.json();
    return data;
} catch (error) {
    console.error('Error fetching species', error);
    return null;
  }

};
