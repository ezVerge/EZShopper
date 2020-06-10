import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router';
import AuthSelectors from 'store/auth/authSelectors';

const AuthRoute = props => {

    const {isAuthenticated, type} = props;

    if (type === 'guest' && isAuthenticated) {
        return <Redirect to="/" />;
    }
    else if (type === 'private' && !isAuthenticated) {
        return <Redirect to="/login" />;
    }

    return <Route {...props} />;

};

AuthRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
    type: PropTypes.string
};

const mapStateToProps = state => ({
    isAuthenticated: AuthSelectors.getIsAuthenticated(state)
});

export default connect(mapStateToProps)(AuthRoute);
