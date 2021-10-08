import React from 'react';
import { Route } from 'react-router-dom';
import PermissionPage from '../../Pages/PermissionPage';
import useProfile from '../../Hooks/useProfile';

const PermissionRoute = ({ component: Component, ...rest }) => {
    const isLogin = useProfile();

    return <Route {...rest} render={(props) => (isLogin ? <Component {...props} /> : <PermissionPage />)} />;
};

export default PermissionRoute;
