import {apiRequest} from 'reduxStore/middleware/apiActions';

export const GET_LIST = 'GET_LIST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';
export const ADD_ITEM_TO_LIST_SUCCESS = 'ADD_ITEM_TO_LIST_SUCCESS';

export const getList = () => {
    return apiRequest({
        url: '/list',
        data: {userId: 1},
        onSuccess: getListSuccess,
        onFailure: error => console.log('Error occurred loading list\n', error),
        label: GET_LIST
    });
};

export const getListSuccess = data => ({
    type: GET_LIST_SUCCESS,
    payload: data
});

export const addItemToList = item => {
    return apiRequest({
        url: '/addItemToList',
        method: 'POST',
        data: item,
        onSuccess: addItemToListSuccess,
        onFailure: error => console.log('Error occurred adding item to list:\n', error),
        label: ADD_ITEM_TO_LIST
    });
};

export const addItemToListSuccess = item => ({
    type: ADD_ITEM_TO_LIST_SUCCESS,
    payload: item
});
