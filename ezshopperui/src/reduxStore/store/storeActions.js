import {apiRequest} from 'reduxStore/middleware/apiActions';

export const GET_STORES = 'GET_STORES';
export const GET_STORES_SUCCESS = 'GET_STORES_SUCCESS';

export const getStores = () => {
    return apiRequest({
        url: '/store',
        data: {},
        onSuccess: getStoresSuccess,
        onFailure: () => console.log('Error occurred loading store'),
        label: GET_STORES
    });
};

export const getStoresSuccess = data => ({
    type: GET_STORES_SUCCESS,
    payload: data
});
