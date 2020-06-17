import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import ShoppingList from 'components/ShoppingList/ShoppingListView';

const ShoppingListContainer = props => {

    const {classes} = props;

    return (
        <ShoppingList classes={classes}/>
    );

};

const styles = () => ({
    paper: {
        margin: '0 auto',
        maxHeight: 500,
        overflow: 'auto',
        minWidth: 350,
        maxWidth: '100%'
    }
});

ShoppingListContainer.propTypes = {
    classes: PropTypes.object
};

export default (withStyles(styles, {withTheme: true})(ShoppingListContainer));
