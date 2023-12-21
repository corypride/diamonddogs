
const baseUrl = "http://localhost:8080/favorites"

const handleResponse = async (response) => {
    if(response.ok) {
        const data = await response.json()
        // console.log('data', data)
        return data
    } else return false;
}

// TODO figure out how to save userId and speciesId from as unique pair
//TODO figure out how to save the speciesId from browse or search

export const saveUserFavorites =  async (token, userId) => {


        const response = await fetch(baseUrl + "/create", {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                userId: userId,
                commonName : "test",
                speciesId: 34
            })
        })
        // return handleResponse(response)
        return console.log(userId)

}


export const getUserFavorites =  async (token, userId) => {
try {
    const response = await fetch(baseUrl + "/userId/" + userId, {
    // const response = await fetch(baseUrl + "/plantId/8", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    if (!response.ok) {
        throw Error;
    }

    const data = await response.json()
    console.log(data)
    return data;
} catch {
    return null
}}



export const getAllFavorites =  async (token) => {
try {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    if (!response.ok) {
        throw Error;
    }

    const data = await response.json()
    return data;
} catch {
    return null
}}
