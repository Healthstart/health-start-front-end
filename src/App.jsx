import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Router from './Router';
import { BrowserRouter, Switch } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import PublicRoute from './Compnents/Route/PublicRoute';
import Logout from './Compnents/Logout';

const App = () => {
    return (
        <BrowserRouter basename="/6">
            <PublicRoute path="/" exact component={LoginPage} />
            <Route path="/content" component={Router} />
            <PublicRoute path='/logout' component={Logout} />
        </BrowserRouter >
    );
};

export default App;
