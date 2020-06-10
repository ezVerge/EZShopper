import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import auth from 'store/auth/authReducers';
import user from 'store/user/userReducers';
import ui from 'store/ui/uiReducers';

export default combineReducers({
    form,
    auth,
    user,
    ui
});
