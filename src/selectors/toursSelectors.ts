import { AppStateType } from '../redux/store';

export const getAllTours = (state: AppStateType) => {
    return state.tours.tours
}

export const getSelectedTour = (state: AppStateType) => {
    return state.tours.selectedTour
}