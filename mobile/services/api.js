import axios from 'axios';

const api = axios.create({
    baseURL: 'http://35.171.175.120:3000/'
});

export default api;