import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://discoverua-server-den8.onrender.com/',
    withCredentials: true
})