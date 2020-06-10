import constants from 'common/constants';
import initialState from 'store/initialState';
import {LOGIN_SUCCESS, LOGOUT} from 'store/auth/authActions';

const userReducers = (state = initialState.user, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem(constants.localStorage.USER, JSON.stringify(action.payload));
            return {...state, ...action.payload};
        case LOGOUT:
            localStorage.removeItem(constants.localStorage.USER);
            return initialState.user;
        default:
            return state;
    }
};

export default userReducers;
