
const baseUrl = "http://localhost:8080/favorites/"

const handleResponse = async (response) => {
    if(response.ok) {
        const data = await response.json()
        // console.log('data', data)
        return data
    } else return false;
}

export const getFavorites =  async (token, userId) => {

    const response = await fetch(baseUrl + userId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    return handleResponse(response)

}




export const getAll =  async (token, userId) => {

    const response = await fetch(baseUrl + "all", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    return handleResponse(response)
}

export const getAllFavorites =  async (token, userId) => {

    const response = await fetch(baseUrl + "allfavorites", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    return handleResponse(response)
}

const addFave = '{"id" : "6", "name" : "dummy", "userId" : "fh3947fhweiuhf09w8"}';


export const addFavorites =  async (token, addFave) => {

    const response = await fetch(baseUrl + "add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    return handleResponse(response)
}


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