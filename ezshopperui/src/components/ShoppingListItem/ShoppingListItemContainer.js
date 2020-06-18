import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import ShoppingListItemView from 'components/ShoppingListItem/ShoppingListItemView';

const handleAddItem = () => {

};

const ShoppingListItemContainer = props => {

    const {classes} = props;

    return (
        <ShoppingListItemView classes={classes} handleAddItem={handleAddItem}/>
    );

};

const styles = theme => ({
    quantity: {
        marginRight: theme.spacing(4)
    },
    itemEntry: {
        padding: theme.spacing(3),
        margin: '0 auto',
        height: 100,
        width: 500,
        marginBottom: theme.spacing(4)
    },
    paper: {
        margin: '0 auto',
        maxHeight: 500,
        overflow: 'auto',
        width: 300
    }
});

ShoppingListItemContainer.propTypes = {
    classes: PropTypes.object
};

export default (withStyles(styles, {withTheme: true})(ShoppingListItemContainer));
