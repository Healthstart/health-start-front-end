import React from 'react';
import { Redirect, Route } from 'react-router';
import useProfile from '../../Hooks/useProfile';

const PublicRoute = ({ component: Component, ...rest }) => {
    const isLogin = useProfile();

    return <Route {...rest} render={(props) => (isLogin ? <Redirect to="/content/" /> : <Component {...props} />)} />;
};

export default PublicRoute;
