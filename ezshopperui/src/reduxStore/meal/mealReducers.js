import initialState from 'reduxStore/initialState';
import {GET_MEALS_SUCCESS} from 'reduxStore/meal/mealActions';

const mealReducers = (state = initialState.meal, action) => {
    switch (action.type) {
        case GET_MEALS_SUCCESS:
            return {...state, meals: [...action.payload]};
        default:
            return state;
    }
};

export default mealReducers;
