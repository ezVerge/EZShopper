import initialState from 'store/initialState';
import {LOGIN_SUCCESS, LOGOUT} from 'store/auth/authActions';

const authReducers = (state = initialState.auth, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, isAuthenticated: true};
        case LOGOUT:
            return {...state, isAuthenticated: false};
        default:
            return state;
    }
};

export default authReducers;
