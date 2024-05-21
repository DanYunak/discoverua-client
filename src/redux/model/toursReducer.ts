import { InferActionsTypes } from '../store';
import { actions } from './toursActions';
import { TourType } from '../../types/Tour.type';

const initialState = {
    tours: [] as TourType[],
    selectedTour: {} as TourType
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

export const toursReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'SET_ALL_TOURS':
            return {
                ...state,
                tours: [...action.tours]
            }
        
        case 'SET_SELECTED_TOUR':
            return {
                ...state,
                selectedTour: action.selectedTour
            }

        case 'SET_TOURS_BY_CITY':
            return {
                ...state,
                tours: [...action.tours]
            }
        
        default: return state
    }
}