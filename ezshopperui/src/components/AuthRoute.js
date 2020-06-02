import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router';

const AuthRoute = props => {

    const {isAuthUser, type} = props;

    if (type === 'guest' && isAuthUser) {
        return <Redirect to="/home" />;
    }
    else if (type === 'private' && !isAuthUser) {
        return <Redirect to="/" />;
    }

    return <Route {...props} />;

};

AuthRoute.propTypes = {
    isAuthUser: PropTypes.bool,
    type: PropTypes.string
};

const mapStateToProps = state => ({
    isAuthUser: state.user.isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);
