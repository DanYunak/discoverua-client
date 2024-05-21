import { actions } from './../toursActions';
import { call, put, takeEvery } from '@redux-saga/core/effects'
import { AxiosResponse, getToursAPI } from '../../../api/getTours';

function* handleAllTours() {
    try {
        const res: AxiosResponse = yield call(getToursAPI)
        yield put(actions.setAllTours(res.data))
    } catch {
        yield put({ type: 'SET_ALL_TOURS_ERRORS', error: 'Error fetching all tours' })
    }
}

export function* watchHandleAllTours() {
    yield takeEvery('GET_ALL_TOURS', handleAllTours)
}