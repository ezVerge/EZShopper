import {apiRequest} from 'reduxStore/middleware/apiActions';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';

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
