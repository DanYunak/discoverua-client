import { FormDataType } from '../../../types/FormData.type';
import { call, put, takeEvery } from '@redux-saga/core/effects'
import { message } from 'antd';
import { signupAPI } from '../../../api/signup';
import { actions } from '../userActions';

type ActionType = {
    formData: FormDataType
}

function* signup(action: ActionType | any) {
    try {
        yield call(signupAPI, action.formData)
        localStorage.setItem('isLoggedIn', JSON.stringify(true))
        localStorage.setItem('username', JSON.stringify(action.formData.username))
        yield put(actions.setIsLoggedIn(true))
        yield put(actions.setUsername(action.formData.username))
        message.success('Ви успішно зареєстрували аккаунт')
        action.navigate('/')
    } catch(e: any) {
        console.log(e)
        if(e.response.data.statusCode === 400 || 409) {
            message.error(e.response.data.message)
        }
        yield put({ type: 'SIGNUP_ERROR', error: 'Error fetching signup' })
    }
}

export function* watchSignup() {
    yield takeEvery('SIGNUP', signup)
}