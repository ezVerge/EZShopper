import initialState from 'reduxStore/initialState';
import {GET_MEALS_SUCCESS} from 'reduxStore/meal/mealActions';

const mealReducers = (state = initialState.meals, action) => {
    switch (action.type) {
        case GET_MEALS_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export default mealReducers;
