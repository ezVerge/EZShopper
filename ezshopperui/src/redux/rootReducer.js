import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import user from './user/userReducers';
import ui from './ui/uiReducers';

export default combineReducers({
    form,
    user,
    ui
});
