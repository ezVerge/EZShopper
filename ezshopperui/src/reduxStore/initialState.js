import constants from 'common/constants';

export default {
    auth: {
        isAuthenticated: !!localStorage.getItem(constants.localStorage.USER)
    },
    items: {},
    list: {},
    meals: {},
    stores: {},
    ui: {
        isLoading: false
    },
    user: JSON.parse(localStorage.getItem(constants.localStorage.USER)) || {}
};
