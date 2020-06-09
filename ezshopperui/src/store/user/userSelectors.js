import {createSelector} from 'reselect';
import {get} from 'lodash';

const emptyArray = [];
const emptyObject = {};

const getRootStateUser = state => get(state, 'user', emptyObject);

const UserSelectorFactory = getUser => ({
    getUser,

    getIsAuthUser: createSelector(getUser, user => Boolean(get(user, 'isAuthUser', false)))
});

const UserSelectors = UserSelectorFactory(getRootStateUser);
export default UserSelectors;
