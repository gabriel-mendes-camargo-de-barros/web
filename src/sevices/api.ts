import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proffy-app-mendes.herokuapp.com/',
});

export default api;