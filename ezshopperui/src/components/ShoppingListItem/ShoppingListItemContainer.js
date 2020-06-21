import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core';
import ShoppingListItemView from 'components/ShoppingListItem/ShoppingListItemView';
import ItemSelectors from 'reduxStore/item/itemSelectors';
import {getItems} from 'reduxStore/item/itemActions';

const handleAddItem = () => {

};

const ShoppingListItemContainer = props => {

    const {classes, getItems, items} = props;

    useEffect(() => {
        getItems();
        // async function fetchData() {
        //     await getItems();
        // }
        // fetchData();
    }, []);

    return (
        <ShoppingListItemView classes={classes} items={items} handleAddItem={handleAddItem}/>
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
    classes: PropTypes.object,
    getItems: PropTypes.func,
    items: PropTypes.object
};

const mapStateToProps = state => ({
    items: ItemSelectors.getItems(state)
});

const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(getItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(ShoppingListItemContainer));
