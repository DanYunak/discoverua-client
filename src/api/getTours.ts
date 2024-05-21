import { instance } from './axiosInstance';

export type AxiosResponse = {
    data: {
        id: string
        title: string
        city: string
        location: string
        price: number
        persons: number
        duration: number
        img: string
    }
}

export const getToursAPI: () => Promise<AxiosResponse> = () => {
    return instance.get('/tours')
}