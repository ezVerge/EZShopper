import {apiRequest} from 'store/middleware/apiActions';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const login = user => {
    return apiRequest({
        url: '/login',
        data: user,
        onSuccess: loginSuccess,
        onFailure: () => console.log('Error occurred loading user'),
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
