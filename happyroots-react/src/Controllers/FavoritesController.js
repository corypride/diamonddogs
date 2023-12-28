const baseUrl = "http://localhost:8080/favorites";

const handleResponse = async (response) => {
  if (response.ok) {
    const data = await response.json();
    return data;
  } else return false;
};

export const saveUserFavorites = async (token, userId, data) => {
  const response = await fetch(baseUrl + "/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userId: userId,
      commonName: data.common_name,
      speciesId: data.id,
    }),
  });
  return console.log(data);
};

export const deleteUserFavorite = async (token, id) => {
  const response = await fetch(baseUrl + `/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getUserFavorites = async (token, userId) => {
  try {
    const response = await fetch(baseUrl + "/userId/" + userId, {
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

export const getUserSpeciesIdList = async (token, userId) => {
  try {
    const response = await fetch(baseUrl + "/speciesIdList/" + userId, {
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

export const getAllFavorites = async (token) => {
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
