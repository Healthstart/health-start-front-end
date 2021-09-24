import { getToken } from './managesToken';

const isLogin = () => {
    if (!getToken()) {
        return false;
    }
    return true;
};

export default isLogin;
