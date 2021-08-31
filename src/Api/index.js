import axios from 'axios';

const Api = axios.create({
    baseURL: process.env.REACT_APP_BACK_HOST,
});

export default Api;
