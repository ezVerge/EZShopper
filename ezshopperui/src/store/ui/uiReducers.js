import initialState from 'store/initialState';
import {SET_LOADER} from 'store/ui/uiActions';

const uiReducer = (state = initialState.ui, action) => {
    switch (action.type) {
        case SET_LOADER:
            return {...state, isLoading: action.payload};
        default:
            return state;
    }
};

export default uiReducer;
