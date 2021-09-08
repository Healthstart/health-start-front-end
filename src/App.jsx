import React from 'react';
import styled from 'styled-components';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ExercisePage from './Pages/ExercisePage';
import TempPage from './Pages/TempPage';
import LoginPage from './Pages/LoginPage';
import Sidemenu from './Compnents/Sidemenu/Sidemenu';

const Background = styled.div`
    position: fixed;

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cbd1df;
`;

const Dashboard = styled.div`
    position: relative;

    width: 88%;
    height: 90%;
    margin: 0 auto;

    background-color: #f6f7f9;
    border-radius: 35px;
`;


const App = () => {
    return (
        <Background>
            <Dashboard>
                <BrowserRouter basename="/6">
                <Sidemenu />
                    <Switch>
                        <Route path="/exercise" component={ExercisePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={TempPage} />
                    </Switch>
                </BrowserRouter>
            </Dashboard>
        </Background>
    );
};

export default App;
