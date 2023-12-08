
const testUrl = "http://localhost:8080/favorites/test"

  


export const postFavorites = (data) => {
    fetch(testUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}


export const getFavorites = (data) => {
    fetch(signupUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => console.log(response));
}

