
const baseUrl = "http://localhost:8080/favorites/"

const handleResponse = async (response) => {
    if(response.ok) {
        const data = await response.json()
        console.log('data', data)
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