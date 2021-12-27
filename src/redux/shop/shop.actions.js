import ShopActionTypes from './shop.types';


export const updateCollectons = (collectionMap) =>( {
type: ShopActionTypes.UPDATE_COLLECTIONS,
payload: collectionMap
})