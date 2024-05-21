import { instance } from './axiosInstance';
import { TourType } from '../types/Tour.type';
import { CityType } from '../types/City.type';

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

export const getToursByCityAPI: (selectedCity: CityType) => Promise<AxiosResponse> = (selectedCity) => {
    return instance.get(`/tours?search=${selectedCity}`)
}