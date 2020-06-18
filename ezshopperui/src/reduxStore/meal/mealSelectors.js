import {get} from 'lodash';
import { createSelector } from 'reselect';

const emptyArray = [];
const emptyObject = {};

const getRootStateMeal = state => get(state, 'meal', emptyObject);

const MealSelectorFactory = getMeal => ({
    getMeal,

    getMeals: createSelector(getMeal, meal => get(meal, 'meals', emptyArray))
});

const MealSelectors = MealSelectorFactory(getRootStateMeal);
export default MealSelectors;
