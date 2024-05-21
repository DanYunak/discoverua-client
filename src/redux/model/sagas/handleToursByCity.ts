import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse, getToursByCityAPI } from '../../../api/getToursByCity';
import { actions } from './../toursActions';
import { CityType } from '../../../types/City.type';

type ActionType = {
    selectedCity: CityType
}

function* handleToursByCity(action: ActionType | any) {
    try {
        console.log('SAGA')
        const res: AxiosResponse = yield call(getToursByCityAPI, action.selectedCity)
        console.log(res)
        yield put(actions.setToursByCity(res.data))
    } catch {
        yield put({ type: 'SET_TOURS_BY_CITY', error: 'Error fetching tours by city' })
    }
}

export function* watchHandleToursByCity() {
    yield takeEvery('GET_TOURS_BY_CITY', handleToursByCity)
}