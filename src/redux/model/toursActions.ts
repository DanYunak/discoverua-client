import { TourType } from '../../types/Tour.type';
import { CityType } from '../../types/City.type';
export const actions = {
    getAllTours: () => ({ type: 'GET_ALL_TOURS' } as const),

    setAllTours: (tours: any) => ({ type: 'SET_ALL_TOURS', tours } as const),
    
    reserveTour: (formData: any) => ({ type: 'RESERVE_TOUR', formData } as const),

    setSelectedTour: (selectedTour: TourType) => ({ type: 'SET_SELECTED_TOUR', selectedTour } as const),

    getToursByCity: (selectedCity: any) => ({ type: 'GET_TOURS_BY_CITY', selectedCity } as const),

    setToursByCity: (tours: any) => ({ type: 'SET_TOURS_BY_CITY', tours } as const)
}