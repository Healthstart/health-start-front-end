import React from 'react';
import { Redirect, Route } from 'react-router';
import isLogin from '../../Utils/isLogin';

const PublicRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (isLogin() ? <Redirect to="/main" /> : <Component {...props} />)} />;
};

export default PublicRoute;
