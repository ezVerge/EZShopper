import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Typography
} from '@material-ui/core';
import classNames from 'classnames';
import constants from 'common/constants';
import validate from 'common/validations';
import TextField from 'muiWrappers/TextField';
import TextArea from 'muiWrappers/TextArea';
import LoadingButton from 'components/LoadingButton';
import UserSelectors from 'reduxStore/user/userSelectors';

export const SUPPORT_FORM_NAME = 'SUPPORT';

const SupportView = props => {

    const {classes, className, open, handleOpen, handleClose, invalid, submitting, onSubmit, handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography className={classNames(classes.link, className)} component={Button} variant={'body2'} onClick={handleOpen}>
                {constants.labels.SUPPORT}
            </Typography>
            <Dialog
                open={open}
                onClose={handleClose}
                disableBackdropClick
                disableEscapeKeyDown
                disablePortal
                aria-labelledby="form-dialog-title"
                aria-describedby="form-dialog-description"
            >
                <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>{constants.labels.SUPPORT}</DialogTitle>
                <Divider variant="middle" className={classes.divider}/>
                <DialogContent className={classes.dialogContent}>
                    <DialogContentText align={'center'} component={'div'} className={classes.blurb}>
                        <Typography variant={'caption'}>{constants.content.SUPPORT}</Typography>
                    </DialogContentText>
                    <Field
                        component={TextField}
                        name={'name'}
                        label={constants.labels.NAME}
                        className={classes.inputElement}
                        fullWidth
                        maxLength={256}
                        disabled={submitting}
                        required
                        validate={validate.required}
                    />
                    <Field
                        component={TextField}
                        name={'email'}
                        label={constants.labels.EMAIL}
                        className={classes.inputElement}
                        fullWidth
                        type={'email'}
                        maxLength={256}
                        disabled={submitting}
                        required
                        validate={[validate.required, validate.email]}
                    />
                    <Field
                        component={TextField}
                        name={'subject'}
                        label={constants.labels.SUBJECT}
                        className={classes.inputElement}
                        fullWidth
                        maxLength={256}
                        disabled={submitting}
                        required
                        validate={validate.required}
                    />
                    <Field
                        component={TextArea}
                        name={'feedback'}
                        label={constants.labels.FEEDBACK}
                        fullWidth
                        charsMax={8000}
                        disabled={submitting}
                        required
                        rows={8}
                        rowsMax={8}
                        className={classes.inputElement}
                        validate={validate.required}
                    />
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <LoadingButton
                        onClick={handleClose}
                        type={'button'}
                        variant={'text'}
                        color={'default'}
                        disabled={submitting}
                        text={constants.labels.CANCELING}
                    >{constants.labels.CANCEL}</LoadingButton>
                    <LoadingButton
                        type={'submit'}
                        variant={'contained'}
                        color={'secondary'}
                        disabled={submitting || invalid}
                        text={constants.labels.SUBMITTING}
                    >{constants.labels.SUBMIT}</LoadingButton>
                </DialogActions>
            </Dialog>
        </form>
    );
};

SupportView.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    open: PropTypes.bool,
    handleOpen: PropTypes.func,
    handleClose: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    onSubmit: PropTypes.func,
    handleSubmit: PropTypes.func
};

const mapStateToProps = state => {
    const user = UserSelectors.getUser(state);
    return {
        form: SUPPORT_FORM_NAME,
        initialValues: {
            name: user.name,
            email: user.username,
            subject: '',
            feedback: ''
        }
    };
};

export default compose(connect(mapStateToProps), reduxForm())(SupportView);
