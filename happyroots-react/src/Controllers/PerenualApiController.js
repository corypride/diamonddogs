import { apiKey } from "../Config/perenualApiKey";


const baseUrl = 'https://perenual.com/api'
// console.log("controller api " + apiKey)


// export const apiKey = process.env.REACT_APP_API_KEY



//TODO need to figure out how to get the species id the favorites table and feed it here


// export const getSpeciesById = (id, apiKey) => {
//     fetch(baseUrl + `/species/details/${id}?key=${apiKey}`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     }).then(response => console.log(response));
// }


export const getAllSpecies = async (token, apiKey) => {
    try {
        const response = await fetch(baseUrl + `/species-list?key=${apiKey}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    
        if (!response.ok) {
            throw Error;
        }

    const data = await response.json()
    console.log(data)
    return data.data;
} catch {
    return null
}}
