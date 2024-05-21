import { call, put, takeEvery } from '@redux-saga/core/effects'
import { message } from 'antd';
import { FormDataType } from '../../../types/FormData.type';
import { AxiosResponse, loginAPI } from '../../../api/login';
import { actions } from '../userActions';
import { actions as appActions } from '../appActions'

type ActionType = {
    formData: FormDataType
}

function* login(action: ActionType | any) {
    try {
        const res: AxiosResponse = yield call(loginAPI, action.formData)
        localStorage.setItem('isLoggedIn', JSON.stringify(true))
        localStorage.setItem('username', JSON.stringify(action.formData.username))
        yield put(actions.setIsLoggedIn(true))
        yield put(actions.setUsername(action.formData.username))
        yield put(appActions.setIsLoginWindowOpen(false))
        message.success('Ви успішно увійшли в аккаунт')
    } catch (e: any) {
        if (e.response && e.response.status === 400) {
            message.error('Incorrect username or password')
        } else {
            yield put({ type: 'LOGIN_ERROR', error: 'Error fetching login' })
        }
    }
}

export function* watchLogin() {
    yield takeEvery('LOGIN', login)
}