import axios from 'axios';

const api = axios.create({
    baseURL: 'http://patrimoniopsf-com.umbler.net'
});

export default api;