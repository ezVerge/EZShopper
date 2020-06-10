import {apiRequest} from 'store/middleware/apiActions';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const getUser = userId => {
    return apiRequest({
        url: '/user',
        data: userId,
        onSuccess: getUserSuccess,
        onFailure: () => console.log('Error occurred loading user'),
        label: GET_USER
    });
};

export const getUserSuccess = data => ({
    type: GET_USER_SUCCESS,
    payload: data
});
