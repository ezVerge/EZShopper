import {apiRequest} from 'reduxStore/middleware/apiActions';

export const GET_LIST = 'GET_LIST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';

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
