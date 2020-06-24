import initialState from 'reduxStore/initialState';
import {GET_LIST_SUCCESS, ADD_ITEM_TO_LIST_SUCCESS} from 'reduxStore/list/listActions';

const listReducers = (state = initialState.list, action) => {
    switch (action.type) {
        case GET_LIST_SUCCESS:
            return {...state, ...action.payload};
        case ADD_ITEM_TO_LIST_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export default listReducers;
