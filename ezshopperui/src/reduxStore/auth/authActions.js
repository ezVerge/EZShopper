import {apiRequest} from 'reduxStore/middleware/apiActions';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const login = credentials => {
    return apiRequest({
        url: '/login',
        data: credentials,
        onSuccess: loginSuccess,
        onFailure: () => console.log('Error occurred authenticating user'),
        label: LOGIN
    });
};

export const loginSuccess = data => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const logout = () => ({
    type: LOGOUT
});
