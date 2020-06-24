import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {Paper} from '@material-ui/core';
import constants from 'common/constants';
import Select from 'muiWrappers/Select';
import TextField from 'muiWrappers/TextField';
import Autocomplete from 'muiWrappers/Autocomplete';
import LoadingButton from 'components/LoadingButton';

export const SHOPPING_LIST_ITEM_FORM_NAME = 'SHOPPING_LIST_ITEM';

const ShoppingListItemView = props => {

    const {classes, items, handleAddItem, handleAddItemToList} = props;

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
                options={Object.values(items).map(item => item.name)}
                freeSolo
                disableClearable
                component={Autocomplete}
                name={'name'}
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
            <LoadingButton
                onClick={handleAddItemToList}
                type={'button'}
                variant={'text'}
                color={'default'}
                // disabled={submitting}
                text={constants.labels.ADDING}
            >{constants.labels.ADD}</LoadingButton>
        </Paper>
    );

};

ShoppingListItemView.propTypes = {
    classes: PropTypes.object,
    items: PropTypes.object,
    handleAddItem: PropTypes.func,
    handleAddItemToList: PropTypes.func
};

const mapStateToProps = () => ({
    form: SHOPPING_LIST_ITEM_FORM_NAME,
    initialValues: {
        quantity: 1,
        name: '',
        comments: ''
    }
});

export default compose(connect(mapStateToProps), reduxForm())(ShoppingListItemView);
