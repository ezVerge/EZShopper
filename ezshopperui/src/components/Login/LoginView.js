import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {Typography, Button} from '@material-ui/core';
import TextField from 'MuiWrappers/TextField';

const required = value => value ? undefined : 'Required';

const LoginView = props => {

    const {invalid, submitting, handleSubmit, onSubmit, initialValues} = props;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" style={{ marginBottom: 8 }}>
                Login
            </Typography>
            <Field
                component={TextField}
                label="Email"
                // type={'email'}
                name={'username'}
                variant="outlined"
                fullWidth
                className="form-input"
                disabled={submitting}
                validate={required}
                // , validate.default.email
            />
            <Field
                component={TextField}
                label="Password"
                type={'password'}
                name={'password'}
                variant="outlined"
                fullWidth
                className="form-input"
                disabled={submitting}
                validate={required}
            />
            <Button
                type='submit'
                variant="contained"
                color="primary"
                className="form-input"
                size="large"
                disabled={invalid}
            >
                Login
            </Button>
        </form>
    );
};

LoginView.propTypes = {
    classes: PropTypes.object,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    initialValues: PropTypes.object
};

export default reduxForm({form: 'login', initialValues: {username: 'stevev', password: 'stevev'}})(LoginView);
