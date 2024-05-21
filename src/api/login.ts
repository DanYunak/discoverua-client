import { FormDataType } from '../types/FormData.type';
import { instance } from './axiosInstance';

export type AxiosResponse = {
    data: {
        accessToken: string
    }
}

export const loginAPI: (formData: FormDataType) => Promise<AxiosResponse> = (formData: FormDataType) => {
    return instance.post('auth/signin', formData)
}