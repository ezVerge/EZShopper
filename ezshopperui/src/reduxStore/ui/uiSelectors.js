import {createSelector} from 'reselect';
import {get} from 'lodash';
// import {SessionStorage} from 'compass-core';

const emptyArray = [];
const emptyObject = {};

const getRootStateUI = state => get(state, 'ui', emptyObject);

const UISelectorFactory = getUI => ({
    getUI,

    getIsLoading: createSelector(getUI, ui => Boolean(get(ui, 'isLoading', false)))
    // getTheme: createSelector(getUI, ui => get(ui, 'theme', SessionStorage.get('theme'))),
    // getIsLoadingNonBlocking: createSelector(getUI, ui => get(last(get(ui, 'loading', emptyArray)), 'nonBlocking', false)),
    // getLoadingMessage: createSelector(getUI, ui => get(last(get(ui, 'loading', emptyArray)), 'message', null)),
    //
    // getHasNotification: createSelector(getUI, ui => Boolean(Object.keys(get(ui, 'notifications', emptyArray)).length)),
    // getNotification: createSelector(getUI, ui => last(Object.values(get(ui, 'notifications', emptyArray)))),
    //
    // getHasAlertMessage: createSelector(getUI, ui => Boolean(get(ui, 'message', false))),
    // getAlertMessage: createSelector(getUI, ui => get(ui, 'message', null)),
    //
    // getIsTeamProgressDrawerShowing: createSelector(getUI, ui => get(ui, 'teamProgressDrawer'))
});

const UISelector = UISelectorFactory(getRootStateUI);
export default UISelector;
