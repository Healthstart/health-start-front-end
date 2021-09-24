import React, { useEffect } from 'react';
import { removeToken } from '../../Utils/managesToken';
import PermissionPage from '../../Pages/PermissionPage';

const Logout = () => {
    useEffect(() => {
        removeToken();
    });

    return <PermissionPage />;
};

export default Logout;
