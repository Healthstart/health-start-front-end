import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ExercisePage from './Pages/ExercisePage';
import TempPage from './Pages/TempPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

const App = () => {
    return (
        <BrowserRouter basename="/6">
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/exercise" component={ExercisePage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
