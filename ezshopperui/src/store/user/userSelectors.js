import {createSelector} from 'reselect';
import {get} from 'lodash';

const emptyArray = [];
const emptyObject = {};

const getRootStateUser = state => get(state, 'user', emptyObject);

const UserSelectorFactory = getUser => ({
    getUser,

    getFirstName: createSelector(getUser, user => get(user, 'firstName', ''))
});

const UserSelectors = UserSelectorFactory(getRootStateUser);
export default UserSelectors;
