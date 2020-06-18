import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isDirty, isValid, reset} from 'redux-form';
import {withStyles} from '@material-ui/core';
import Support from 'components/Support/SupportView';
import {SUPPORT_FORM_NAME} from 'components/Support/SupportView';

// import generalService from 'reduxStore/general/generalService';

const SupportContainer = props => {

    const {classes, isFormDirty, isFormValid, reset} = props;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        reset();
    };

    const onSubmit = values => {
        if (!isFormValid || !isFormDirty) {
            return;
        }
        try {
            // generalService.submitSupportTicket(values);
        }
        catch (e) {
            reset();
            throw e;
        }
        handleClose();
    };

    return (
        <Support classes={classes} open={open} onSubmit={onSubmit} handleOpen={handleOpen} handleClose={handleClose}/>
    );
};

const styles = theme => ({
    link: {
        textTransform: 'unset'
    },
    dialogTitle: {
        paddingBottom: theme.spacing(1) / 2
    },
    divider: {
        marginBottom: theme.spacing(1)
    },
    dialogContent: {
        maxWidth: 535
    },
    blurb: {
        textAlign: 'left',
        marginBottom: theme.spacing(2)
    },
    inputElement: {
        marginBottom: theme.spacing(2)
    },
    dialogActions: {
        margin: 0,
        padding: `0 ${theme.spacing(3)}px ${theme.spacing(3)}px`
    }
});

SupportContainer.propTypes = {
    classes: PropTypes.object,
    isFormDirty: PropTypes.bool,
    isFormValid: PropTypes.bool,
    reset: PropTypes.func
};

const mapStateToProps = state => ({
    isFormDirty: isDirty(SUPPORT_FORM_NAME)(state),
    isFormValid: isValid(SUPPORT_FORM_NAME)(state)
});

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SupportContainer));
