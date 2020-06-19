import {get} from 'lodash';

const emptyObject = {};

const getRootStateList = state => get(state, 'list', emptyObject);

const ListSelectorFactory = getList => ({
    getList
});

const ListSelectors = ListSelectorFactory(getRootStateList);
export default ListSelectors;
