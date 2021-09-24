import React from 'react';
import { Switch } from 'react-router-dom';
import { Background, Dashboard } from './Atomic/Background';
import ProfilePage from './Pages/ProfilePage';
import TempPage from './Pages/TempPage';
import Sidemenu from './Compnents/Sidemenu/Sidemenu';
import PermissionRoute from './Compnents/Route/PermissionRoute';

const Router = ({ match }) => {
    return (
        <Background>
            <Dashboard>
                <Sidemenu match={match} />
                <Switch>
                    <PermissionRoute path={`${match.path}/`} exact component={ProfilePage} />
                    <PermissionRoute path={`${match.path}/exercise`} component={TempPage} />
                    <PermissionRoute path={`${match.path}/temp`} component={TempPage} />
                </Switch>
            </Dashboard>
        </Background>
    );
};

export default Router;
