import { InferActionsTypes } from '../store';
import { actions } from './appActions';

const initialState = {
    isLoginWindowOpen: false
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

export const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'SET_IS_LOGIN_WINDOW_OPEN':
            return {
                ...state,
                isLoginWindowOpen: action.boolean
            }

        default: return state
    }
}