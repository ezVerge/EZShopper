import initialState from 'reduxStore/initialState';
import {GET_STORES_SUCCESS} from 'reduxStore/store/storeActions';

const storeReducers = (state = initialState.stores, action) => {
    switch (action.type) {
        case GET_STORES_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export default storeReducers;
