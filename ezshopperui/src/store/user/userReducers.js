import initialState from 'store/initialState';
import {LOGIN_SUCCESS, LOGOUT} from 'store/user/userActions';

const userReducers = (state = initialState.user, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            return { ...state, isAuthUser: true, user: action.payload.user };
        case LOGOUT:
            localStorage.removeItem('user');
            return {...state, isAuthUser: false, user: {}};
        default:
            return state;
    }
};

export default userReducers;
