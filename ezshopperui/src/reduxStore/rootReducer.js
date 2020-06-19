import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import auth from 'reduxStore/auth/authReducers';
import list from 'reduxStore/list/listReducers';
import meals from 'reduxStore/meal/mealReducers';
import user from 'reduxStore/user/userReducers';
import ui from 'reduxStore/ui/uiReducers';

export default combineReducers({
    form,
    auth,
    list,
    meals,
    user,
    ui
});
