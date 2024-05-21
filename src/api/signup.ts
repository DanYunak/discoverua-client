import { instance } from './axiosInstance';
import { FormDataType } from '../types/FormData.type';

export type AxiosResponse = {
    data: {}
}

export const signupAPI: (formData: FormDataType) => Promise<AxiosResponse> = (formData: FormDataType) => {
    return instance.post('auth/signup', formData)
}