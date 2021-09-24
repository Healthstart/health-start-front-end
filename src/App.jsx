import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Router from './Router';
import LoginPage from './Pages/LoginPage';
import PublicRoute from './Compnents/Route/PublicRoute';
import Logout from './Compnents/Logout';
import PermissionRoute from './Compnents/Route/PermissionRoute';

const App = () => {
    return (
        <BrowserRouter basename="/6">
            <PublicRoute path="/" exact component={LoginPage} />
            <Route path="/logout" component={Logout} />
            <PermissionRoute path="/content" component={Router} />
        </BrowserRouter>
    );
};

export default App;
