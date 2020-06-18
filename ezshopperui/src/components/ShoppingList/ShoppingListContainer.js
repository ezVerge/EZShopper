import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core';
import ShoppingList from 'components/ShoppingList/ShoppingListView';
import {getList} from 'reduxStore/list/listActions';
import ListSelectors from 'reduxStore/list/listSelectors';

const ShoppingListContainer = props => {

    const {classes, getList, list} = props;

    useEffect(() => {
        getList();
        // async function fetchData() {
        //     await getList();
        // }
        // fetchData();
    }, []);

    return (
        <ShoppingList classes={classes} list={list}/>
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
    classes: PropTypes.object,
    getList: PropTypes.func,
    list: PropTypes.object
};

const mapStateToProps = state => ({
    list: ListSelectors.getList(state)
});

const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(getList())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(ShoppingListContainer));
