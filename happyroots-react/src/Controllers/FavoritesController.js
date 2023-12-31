import { getUserFromLocalStorage } from '../Helpers/authHelpers';

export const getTokenAndUid = () => {
  const user = getUserFromLocalStorage();
  if(!user) {
    return null;
  }
    const {uid, stsTokenManager} = user;
    const token = stsTokenManager?.accessToken
return {uid, token}
}

const baseUrl = "http://localhost:8080/favorites";

const handleResponse = async (response) => {
  if (response.ok) {
    const data = await response.json();
    return data;
  } else return false;
};


export const saveUserFavorites = async (data) => {
  const { uid, token } = getTokenAndUid();

  try {
    const response = await fetch(baseUrl + "/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: uid,
        commonName: data.common_name,
        speciesId: data.id,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to save user favorite. Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(uid, token, data);
    return responseData; // Return the response data

  } catch (error) {
    console.error("Error saving user favorites:", error);
    throw error; // Rethrow the error for handling in the calling code
  }
};

export const deleteUserFavorite = async (id) => {
  const {uid, token} = getTokenAndUid();

  const response = await fetch(baseUrl + `/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getUserFavorites = async () => {
  const {uid, token} = getTokenAndUid() || {};

  try {
    const response = await fetch(baseUrl + "/userId/" + uid, {
      // const response = await fetch(baseUrl + "/plantId/8", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

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

export const getUserSpeciesIdList = async () => {
  const {uid, token} = getTokenAndUid();

  try {
    const response = await fetch(baseUrl + "/speciesIdList/" + uid, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

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

export const getAllFavorites = async () => {
  const {uid, token} = getTokenAndUid();

  try {
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw Error;
    }

    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};
