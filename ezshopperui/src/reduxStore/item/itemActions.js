import {apiRequest} from 'reduxStore/middleware/apiActions';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';

export const getItems = () => {
    return apiRequest({
        url: '/items',
        data: {userId: 1},
        onSuccess: getItemsSuccess,
        onFailure: error => console.log('Error occurred loading items:\n', error),
        label: GET_ITEMS
    });
};

export const getItemsSuccess = data => ({
    type: GET_ITEMS_SUCCESS,
    payload: data
});

export const addItem = item => {
    console.log('2', item);
    return apiRequest({
        url: '/addItem',
        method: 'POST',
        data: item,
        onSuccess: addItemSuccess,
        onFailure: error => console.log('Error occurred adding item:\n', error),
        label: ADD_ITEM
    });
};

export const addItemSuccess = item => ({
    type: ADD_ITEM_SUCCESS,
    payload: item
});
