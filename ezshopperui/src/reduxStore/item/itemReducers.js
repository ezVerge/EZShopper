import initialState from 'reduxStore/initialState';
import {GET_ITEMS_SUCCESS} from 'reduxStore/item/itemActions';

const itemReducers = (state = initialState.items, action) => {
    switch (action.type) {
        case GET_ITEMS_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export default itemReducers;
