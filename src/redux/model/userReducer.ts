import { InferActionsTypes } from '../store';
import { actions } from './userActions';

const isLoggedInString = localStorage.getItem('isLoggedIn')
const isLoggedInParse = isLoggedInString ? JSON.parse(isLoggedInString) : ''

const usernameInString = localStorage.getItem('username')
const usernameInParse = usernameInString ? JSON.parse(usernameInString) : ''

const initialState = {
    username: usernameInParse,
    isLoggedIn: isLoggedInParse
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

export const userReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'SET_IS_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: action.boolean
            }

        case 'SET_USERNAME':
            return {
                ...state,
                username: action.username
            }

        default: return state
    }
}