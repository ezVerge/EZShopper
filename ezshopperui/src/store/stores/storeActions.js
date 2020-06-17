import {apiRequest} from 'store/middleware/apiActions';

export const GET_STORES = 'GET_STORES';
export const GET_STORES_SUCCESS = 'GET_STORES_SUCCESS';

export const getStores = () => {
    return apiRequest({
        url: '/stores',
        data: {},
        onSuccess: getStoresSuccess,
        onFailure: () => console.log('Error occurred loading stores'),
        label: GET_STORES
    });
};

export const getStoresSuccess = data => ({
    type: GET_STORES_SUCCESS,
    payload: data
});
