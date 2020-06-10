import {createSelector} from 'reselect';
import {get} from 'lodash';

const emptyArray = [];
const emptyObject = {};

const getRootStateAuth = state => get(state, 'auth', emptyObject);

const AuthSelectorFactory = getAuth => ({
    getAuth,

    getIsAuthenticated: createSelector(getAuth, auth => Boolean(get(auth, 'isAuthenticated', false)))
});

const AuthSelectors = AuthSelectorFactory(getRootStateAuth);
export default AuthSelectors;
