import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isDirty, isValid} from 'redux-form';
import {withStyles} from '@material-ui/core';
import {login} from 'store/user/userActions';
import UISelector from 'store/ui/uiSelectors';
import Login, {LOGIN_FORM_NAME} from 'routes/Login/LoginView';

const LoginContainer = props => {

    const {classes, login, isFormDirty, isFormValid} = props;

    const submitForm = values => {
        if (!isFormValid) { // add back after debug (and remove initialValues)    || !isFormDirty
            return false;
        }
        login(values);
    };

    const handleForgotPassword = () => {

    };

    return (
        <Login classes={classes} onSubmit={submitForm} handleForgotPassword={handleForgotPassword}/>
    );

};

const styles = theme => ({
    login: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        maxWidth: 350,
        minHeight: 400,
        padding: theme.spacing(4)
    },
    logo: {
        marginBottom: theme.spacing(2)
    },
    form: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
});

LoginContainer.propTypes = {
    classes: PropTypes.object,
    login: PropTypes.func,
    isFormDirty: PropTypes.bool,
    isFormValid: PropTypes.bool
};

const mapStateToProps = state => ({
    isLoading: UISelector.getIsLoading(state),
    isFormDirty: isDirty(LOGIN_FORM_NAME)(state),
    isFormValid: isValid(LOGIN_FORM_NAME)(state)
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(LoginContainer));
