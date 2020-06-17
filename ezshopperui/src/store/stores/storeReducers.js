import initialState from 'store/initialState';
import {GET_STORES_SUCCESS} from 'store/stores/storeActions';

const storeReducers = (state = initialState.stores, action) => {
    switch (action.type) {
        case GET_STORES_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export default storeReducers;
