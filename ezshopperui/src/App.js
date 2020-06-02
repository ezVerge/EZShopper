import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Typography, Divider} from '@material-ui/core';
import AuthRoute from './components/AuthRoute';

import NavBar from './components/NavBar';
import LoginPage from './pages/Login';
import HomePage from './pages/HomePage';
// import MyAccount from './pages/MyAccount';

const IndexPage = () => (
    <>
        <Typography variant="h3">Welcome to the App</Typography>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <Typography variant="h6">Feel free to take a look around</Typography>
    </>
);

const App = () => (
    <Router>
        <NavBar />
        <div className="container">
            <Switch>
                <AuthRoute path="/home" render={HomePage} type="private" />
                <AuthRoute path="/login" type="guest">
                    <LoginPage />
                </AuthRoute>
                <AuthRoute path="/my-account" type="private">
                    {/*<MyAccount />*/}
                </AuthRoute>
                <Route path="/" render={IndexPage} />
            </Switch>
        </div>
    </Router>
);

export default App;
