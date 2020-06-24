import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues} from 'redux-form';
import {withStyles} from '@material-ui/core';
import moment from 'moment';
import ShoppingListItemView, {SHOPPING_LIST_ITEM_FORM_NAME} from 'components/ShoppingListItem/ShoppingListItemView';
import ItemSelectors from 'reduxStore/item/itemSelectors';
import {addItemToList} from 'reduxStore/list/listActions';
import {getItems, addItem} from 'reduxStore/item/itemActions';

const ShoppingListItemContainer = props => {

    const {classes, getItems, addItem, addItemToList, item, items} = props;

    const handleAddItemToList = () => {
        Object.assign(item, {userId: 1, storeId: 1, active: 1, added: moment().utc(), id: 0});
        addItemToList(item);
    };

    const handleAddItem = () => {
        addItem({
            Quantity: item.quantity,
            Name: item.name,
            Comments: item.comments
        });
    };

    useEffect(() => {
        getItems();
        // async function fetchData() {
        //     await getItems();
        // }
        // fetchData();
    }, []);

    return (
        <ShoppingListItemView classes={classes} items={items} handleAddItem={handleAddItem} handleAddItemToList={handleAddItemToList}/>
    );

};

const styles = theme => ({
    quantity: {
        marginRight: theme.spacing(4)
    },
    itemEntry: {
        padding: theme.spacing(3),
        margin: '0 auto',
        height: 250,
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
    addItem: PropTypes.func,
    addItemToList: PropTypes.func,
    items: PropTypes.object,
    item: PropTypes.object
};

const mapStateToProps = state => ({
    items: ItemSelectors.getItems(state),
    item: getFormValues(SHOPPING_LIST_ITEM_FORM_NAME)(state)
});

const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(getItems()),
    addItem: () => dispatch(addItem()),
    addItemToList: item => dispatch(addItemToList(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(ShoppingListItemContainer));
