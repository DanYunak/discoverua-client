import { AppStateType } from '../redux/store';

export const getIsLoginWindowOpen = (state: AppStateType) => {
    return state.app.isLoginWindowOpen
}