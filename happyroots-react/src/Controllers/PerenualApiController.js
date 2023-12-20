

const baseUrl = 'https://perenual.com/api'


export const apiKey = process.env.REACT_APP_API_KEY

export const id = "";


// export const getSpeciesById = (id, apiKey) => {
//     fetch(baseUrl + `/species/details/${id}?key=${apiKey}`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     }).then(response => console.log(response));
// }


export const getAllSpecies = (token, apiKey) => {
    fetch(baseUrl + `/species-list?key=${apiKey}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => console.log(response));
}