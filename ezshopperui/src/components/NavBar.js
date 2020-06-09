import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Button, Typography} from '@material-ui/core';
import {logout} from 'store/user/userActions';
import UserSelectors from 'store/user/userSelectors';
import {description} from 'root/package.json';

const NavBar = props => {

    const {isAuthUser, logout} = props;

    return (
        <AppBar position="static" style={{display: 'flex'}}>
            <Toolbar>
                <Typography variant="h6">{description}</Typography>
                <div style={{marginLeft: 'auto'}}>
                    {isAuthUser && (
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
    isAuthUser: PropTypes.bool,
    logout: PropTypes.func
};

const mapStateToProps = state => ({
    isAuthUser: UserSelectors.getIsAuthUser(state)
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
