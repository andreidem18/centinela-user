import axios from 'axios';

const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
})

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
    axios.get(setURL(endpoint), getConfig())
        .then(res => resolve(res))
        .catch(err => reject(err))
})


export const post = (endpoint, data) => new Promise((resolve, reject) => {
    axios.post(setURL(endpoint), data, getConfig())
        .then(res => resolve(res))
        .catch(err => reject(err))
})


export const patch = (endpoint, data) => new Promise((resolve, reject) => {
    axios.patch(setURL(endpoint), data, getConfig())
        .then(res => resolve(res))
        .catch(err => reject(err))
})
