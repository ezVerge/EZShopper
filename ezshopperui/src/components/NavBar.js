import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Button, Typography} from '@material-ui/core';
import {logout} from 'reduxStore/auth/authActions';
import AuthSelectors from 'reduxStore/auth/authSelectors';
import {description} from 'root/package.json';

const NavBar = props => {

    const {isAuthenticated, logout} = props;

    return (
        <AppBar position="static" style={{display: 'flex'}}>
            <Toolbar>
                <Typography variant="h6">{description}</Typography>
                <div style={{marginLeft: 'auto'}}>
                    {isAuthenticated && (
                        <>
                            <Link to="/home">
                                <Button color="inherit">Home</Button>
                            </Link>
                            <Link to="/my-account">
                                <Button color="inherit">My Account</Button>
                            </Link>
                            <Button color="inherit" onClick={logout}>
                                Logout
                            </Button>
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );

};

NavBar.propTypes = {
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func
};

const mapStateToProps = state => ({
    isAuthenticated: AuthSelectors.getIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
