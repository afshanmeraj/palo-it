export function getHopitals() {
    return fetch('http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals')
        .then(response => response.json());
}

export function getIllnesses() {
    return fetch('http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses')
        .then(response => response.json());
}

export function saveUserDetails(data) {
    fetch('http://localhost:4000/save-user/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(res => console.log(res));
}