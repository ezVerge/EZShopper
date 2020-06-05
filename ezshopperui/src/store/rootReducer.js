import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import user from 'store/user/userReducers';
import ui from 'store/ui/uiReducers';

export default combineReducers({
    form,
    user,
    ui
});
