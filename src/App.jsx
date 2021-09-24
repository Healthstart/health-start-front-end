import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ExercisePage from './Pages/ExercisePage';
import LoginPage from './Pages/LoginPage';
import PermissionRoute from './Compnents/Route/PermissionRoute';
import PublicRoute from './Compnents/Route/PublicRoute';
import Logout from './Compnents/Logout';

const App = () => {
    return (
        <BrowserRouter basename="/6">
            <Switch>
                <PublicRoute path="/" exact component={LoginPage} />
                <PublicRoute path="/login" component={LoginPage} />
                <PermissionRoute path="/exercise" component={ExercisePage} />
                <PermissionRoute path="/logout" component={Logout} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
