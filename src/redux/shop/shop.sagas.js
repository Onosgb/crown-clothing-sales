import {takeLatest, call, put, all} from 'redux-saga/effects'
import ShopActionTypes from './shop.types'
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions'


export function* fetchCollectionAsync() {
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield  collectionRef.get();
        const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
       yield put(fetchCollectionsSuccess(collectionMap));
    }catch(error){
        yield put(fetchCollectionsFailure)
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
         )
}

export function* shopSagas () {
    yield all([
        call(fetchCollectionStart)
    ])
}