import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Background, Dashboard } from './Atomic/Background';
import ProfilePage from './Pages/ProfilePage';
import TempPage from './Pages/TempPage';
import Sidemenu from './Compnents/Sidemenu/Sidemenu';

const Router = ({ match }) => {
    return (
        <Background>
            <Dashboard>
                <Sidemenu match={match} />
                <Switch>
                    <Route path={`${match.path}/profile`} component={ProfilePage} />
                    <Route path={`${match.path}/exercise`} component={TempPage} />
                    <Route path={`${match.path}/temp`} component={TempPage} />
                </Switch>
            </Dashboard>
        </Background>
    );
};

export default Router;
