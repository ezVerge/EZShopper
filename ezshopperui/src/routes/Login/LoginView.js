import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {CardActions, Grid, Link, Paper, Button} from '@material-ui/core';
import TextField from 'muiWrappers/TextField';
import constants from 'common/constants';
import validate from 'common/validations';
import Logo from 'img/ezShopper.png';

export const LOGIN_FORM_NAME = 'LOGIN_FORM';

const LoginView = props => {

    const {classes, invalid, submitting, handleSubmit, onSubmit, handleForgotPassword} = props;

    return (
        <Grid item className={classes.login}>
            <Paper className={classes.paper} elevation={8}>
                <img className={classes.logo} src={Logo} alt={''}/>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        component={TextField}
                        label={constants.labels.EMAIL}
                        type={'email'}
                        name={'username'}
                        variant="outlined"
                        fullWidth
                        disabled={submitting}
                        validate={[validate.required, validate.email]}
                    />
                    <Field
                        component={TextField}
                        label={constants.labels.PASSWORD}
                        type={'password'}
                        name={'password'}
                        variant="outlined"
                        fullWidth
                        disabled={submitting}
                        validate={validate.required}
                    />
                    <CardActions
                        style={{
                            flex: 0.3,
                            justifyContent: 'space-between',
                            margin: 0,
                            padding: 0
                        }}
                    >
                        <Link component={'button'} type={'button'} variant={'body2'} onClick={handleForgotPassword}>{constants.labels.FORGOT_PASSWORD}</Link>
                        <Button
                            type='submit'
                            variant="contained"
                            color="primary"
                            disabled={submitting || invalid}
                        >
                            {submitting ? constants.labels.LOGGING_IN : constants.labels.LOGIN}
                        </Button>
                    </CardActions>
                </form>
            </Paper>
        </Grid>
    );
};

LoginView.propTypes = {
    classes: PropTypes.object,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    handleForgotPassword: PropTypes.func
};

export default reduxForm({form: LOGIN_FORM_NAME, initialValues: {username: 'steveverge@gmail.com', password: 'stevev'}})(LoginView);
