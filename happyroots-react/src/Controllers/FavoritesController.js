
const baseUrl = "http://localhost:8080/favorites"

const handleResponse = async (response) => {
    if(response.ok) {
        const data = await response.json()
        // console.log('data', data)
        return data
    } else return false;
}

export const getUserFavorites =  async (token, userId) => {
    const response = await fetch(baseUrl + "/userId/" + userId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    // return handleResponse(response)
    return console.log("test")

}


export const getAllFavorites =  async (token, userId) => {
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



// export const addFavorites =  async (token, addFave) => {

//     const response = await fetch(baseUrl + "add", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         },
//     })
//     return handleResponse(response)
// }


// export const addFavorites = (token, data) => {
//     fetch(baseUrl + "add", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`

//         },
//         body: JSON.stringify(data),
//     }).then(response => {
//         return response.data
//     });
// }