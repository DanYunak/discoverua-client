import { all, fork } from '@redux-saga/core/effects';
import { userRootSaga } from './userRootSaga';
import { toursRootSaga } from './toursRootSaga';

export function* rootSaga() {
    yield all([
        fork(userRootSaga),
        fork(toursRootSaga)
    ])
}