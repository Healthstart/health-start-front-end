import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ExercisePage from './Pages/ExercisePage';
import TempPage from './Pages/TempPage';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/exercise" component={ExercisePage} />
                <Route path="/login" component={TempPage} />
                <Route path="/register" component={TempPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
