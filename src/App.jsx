import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MainPage from './Pages/Main/MainPage';
import ExercisePage from './Pages/ExercisePage';
import TempPage from './Pages/TempPage';
import LoginPage from './Pages/LoginPage';

const App = () => {
    return (
        <BrowserRouter basename="/6">
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/exercise" component={ExercisePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={TempPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
