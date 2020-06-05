import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from 'store/user/userActions';
import UISelector from 'store/ui/uiSelectors';
import Login from 'components/Login/LoginView';

const LoginContainer = props => {

    const {login} = props;

    const submitForm = values => {
        login(values);
    };

    return (
        <Login onSubmit={submitForm}/>
    );

};

LoginContainer.propTypes = {
    classes: PropTypes.object,
    login: PropTypes.func
};

const mapStateToProps = state => ({
    isLoading: UISelector.getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
