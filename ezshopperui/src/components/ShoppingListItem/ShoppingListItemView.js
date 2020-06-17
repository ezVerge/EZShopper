import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {Paper} from '@material-ui/core';
import Select from 'muiWrappers/Select';
import TextField from 'muiWrappers/TextField';
import constants from 'common/constants';

export const SHOPPING_LIST_ITEM_FORM_NAME = 'SHOPPING_LIST_ITEM';

const ShoppingListItemView = props => {

    const {classes} = props;

    return (
        <Paper className={classes.itemEntry} elevation={5}>
            <Field
                component={Select}
                name={'quantity'}
                label={'Quantity'}
                className={classes.quantity}
                // disabled={submitting}
            />
            <Field
                component={TextField}
                name={'item'}
                label={constants.labels.ITEM}
                className={classes.inputElement}
                fullWidth={false}
                maxLength={256}
                // disabled={submitting}
            />
            <Field
                component={TextField}
                name={'comments'}
                label={constants.labels.COMMENTS}
                className={classes.inputElement}
                fullWidth
                maxLength={256}
                // disabled={submitting}
            />
        </Paper>
    );

};

ShoppingListItemView.propTypes = {
    classes: PropTypes.object
};

const mapStateToProps = () => ({
    form: SHOPPING_LIST_ITEM_FORM_NAME
});

export default compose(connect(mapStateToProps), reduxForm())(ShoppingListItemView);
