import axios from 'axios';

const Api = axios.create({
    baseURL: process.env.REACT_APP_BACK_HOST,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer `,
      },
});

export default Api;
