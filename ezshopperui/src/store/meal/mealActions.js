import {apiRequest} from 'store/middleware/apiActions';

export const GET_MEALS = 'GET_MEALS';
export const GET_MEALS_SUCCESS = 'GET_MEALS_SUCCESS';

export const getMeals = () => {
    return apiRequest({
        url: '/meals',
        data: {userId: 1},
        onSuccess: getMealsSuccess,
        onFailure: error => console.log('Error occurred loading meal:\n', error),
        label: GET_MEALS
    });
};

export const getMealsSuccess = data => ({
    type: GET_MEALS_SUCCESS,
    payload: data
});
