const testUrl = "http://localhost:8080/plants/"
const signupUrl = 'http://localhost:8080/plants/signup';
const loginUrl = 'http://localhost:8080/plants/login';
  

export const getTest = () => {
    fetch(testUrl).then(response => console.log(response));
}

export const login = (data) => {
    let user;
    
    fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => user = response.data);

    return user;
}

export const signup = (data) => {
    fetch(signupUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => console.log(response));
}