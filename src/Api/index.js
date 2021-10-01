import axios from 'axios';
import { getToken } from '../Utils/managesToken';

const Api = axios.create({
    baseURL: process.env.REACT_APP_BACK_HOST,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
    },
});

export default Api;