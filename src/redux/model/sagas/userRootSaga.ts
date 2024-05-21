import { all } from '@redux-saga/core/effects';
import { watchLogin } from './login';
import { watchSignup } from './signup';

export function* userRootSaga() {
    yield all([
        watchLogin(),
        watchSignup()
    ])
}