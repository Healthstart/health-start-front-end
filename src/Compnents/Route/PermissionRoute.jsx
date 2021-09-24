import React from 'react';
import { Route } from 'react-router-dom';
import isLogin from '../../Utils/isLogin';
import PermissionPage from '../../Pages/PermissionPage';

const PermissionRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (isLogin() ? <Component {...props} /> : <PermissionPage />)} />;
};

export default PermissionRoute;
