import {get} from 'lodash';

const emptyObject = {};

const getRootStateMeal = state => get(state, 'meals', emptyObject);

const MealSelectorFactory = getMeals => ({
    getMeals
});

const MealSelectors = MealSelectorFactory(getRootStateMeal);
export default MealSelectors;
