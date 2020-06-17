import {get} from 'lodash';

const emptyArray = [];
const emptyObject = {};

const getRootStateStore = state => get(state, 'store', emptyObject);

const StoreSelectorFactory = getStore => ({
    getStore

});

const StoreSelectors = StoreSelectorFactory(getRootStateStore);
export default StoreSelectors;
