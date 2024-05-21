import { all } from '@redux-saga/core/effects';
import { watchHandleAllTours } from './handleAllTours';
import { watchHandleToursByCity } from './handleToursByCity';

export function* toursRootSaga() {
    yield all([
        watchHandleAllTours(),
        watchHandleToursByCity()
    ])
}