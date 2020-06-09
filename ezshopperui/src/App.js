import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import AuthRoute from 'components/AuthRoute';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import LoginPage from 'routes/Login/LoginContainer';
import HomePage from 'routes/HomePage';
import MyAccount from 'routes/MyAccount/MyAccountContainer';

const App = () => (
    <Router>
        <Grid container direction={'column'} style={{display: 'flex', flex: 1, minHeight: '98vh'}}>
            <NavBar />
            <Switch>
                <AuthRoute path="/login" type="guest">
                    <LoginPage/>
                </AuthRoute>
                <AuthRoute path="/my-account" type="private">
                    <MyAccount />
                </AuthRoute>
                <AuthRoute path="/" component={HomePage} type="private"/>
                <Route path="/">
                    <LoginPage/>
                </Route>
            </Switch>
            <Footer/>
        </Grid>
    </Router>
);

export default App;
