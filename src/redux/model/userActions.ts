import { FormDataType } from '../../types/FormData.type';

export const actions = {
    setUsername: (username: string) => ({ type: 'SET_USERNAME', username } as const),

    setIsLoggedIn: (boolean: boolean) => ({ type: 'SET_IS_LOGGED_IN', boolean } as const),

    login: (formData: FormDataType) => ({ type: 'LOGIN', formData } as const),

    signup: (formData: FormDataType) => ({ type: 'SIGNUP', formData } as const)
}