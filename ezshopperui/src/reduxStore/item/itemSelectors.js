import {get} from 'lodash';

const emptyObject = {};

const getRootStateItem = state => get(state, 'items', emptyObject);

const ItemSelectorFactory = getItems => ({
    getItems
});

const ItemSelectors = ItemSelectorFactory(getRootStateItem);
export default ItemSelectors;
