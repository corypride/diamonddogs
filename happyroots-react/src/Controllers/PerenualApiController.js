import { apiKey } from "../Config/perenualApiKey";

const baseUrl = "https://perenual.com/api";

export const getSpeciesById = async (token, speciesId, apiKey) => {
  try {
    const response = await fetch(
      baseUrl + `/species/details/${speciesId}?key=${apiKey}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
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

export const getAllSpecies = async (token, apiKey, page) => {
  try {
    const response = await fetch(
      baseUrl + `/species-list?key=${apiKey}&page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
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
