import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = () => {
    const token = cookies.get('token');
    console.log(token);
    return token;
};

export const removeToken = () => {
    cookies.remove('token');
};

export const setToken = (token) => {
    cookies.set('token', token, {
        path: '/',
        expires: Math.floor(Date.now() / 1000) + 60 * 60,
    });
};
