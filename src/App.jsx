import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Router from './Router';
import LoginPage from './Pages/LoginPage';


const App = () => {
    return (
        <BrowserRouter basename="/6">
            <Route path="/" exact component={LoginPage} />
            <Route path="/content" component={Router} />
        </BrowserRouter >
    );
};

export default App;
