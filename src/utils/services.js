import axios from 'axios';

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
};

const setURL = endpoint => process.env.REACT_APP_BASE_URL + endpoint;

export const loginPost = data => new Promise((resolve, reject) => {
    axios.post(setURL("auth/authenticate"), data)
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        });
});


export const get = endpoint => new Promise((resolve, reject) => {
    axios.get(setURL(endpoint), config)
        .then(res => resolve(res))
        .catch(err => reject(err))
})


export const post = (endpoint, data) => new Promise((resolve, reject) => {
    axios.post(setURL(endpoint), data, config)
        .then(res => resolve(res))
        .catch(err => reject(err))
})


export const notTokenPost = (endpoint, data) => new Promise((resolve, reject) => {
    axios.post(setURL(endpoint), data)
        .then(res => resolve(res))
        .catch(err => reject(err))
})
