import { apiKey } from "../Config/perenualApiKey";

const baseUrl = "https://perenual.com/api";

export const getSpeciesById = async (speciesId, apiKey) => {

  try {
    const response = await fetch(
      baseUrl + `/species/details/${speciesId}?key=${apiKey}`,
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

export const getAllSpecies = async (apiKey, page) => {
  try {
    const response = await fetch(
      baseUrl + `/species-list?key=${apiKey}&page=${page}`,
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
