import React from 'react';
import styled from 'styled-components';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Background, Dashboard } from './Atomic/Background';
import ProfilePage from './Pages/ProfilePage';
import ExercisePage from './Pages/ExercisePage';
import TempPage from './Pages/TempPage';
import LoginPage from './Pages/LoginPage';
import Sidemenu from './Compnents/Sidemenu/Sidemenu';

const App = () => {
    return (
        <Background>
            <Dashboard>
                <BrowserRouter basename="/6">
                <Sidemenu />
                    <Switch>
                        <Route path="/profile" exact component={ProfilePage} />
                        <Route path="/exercise" component={ExercisePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={TempPage} />
                        <Route path="/temp" component={TempPage} />
                    </Switch>
                </BrowserRouter>
            </Dashboard>
        </Background>
    );
};

export default App;
