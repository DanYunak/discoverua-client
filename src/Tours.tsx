import { FC } from 'react';
import { Tour } from './Tour';
import './Tours.scss';
import * as React from 'react';
import { useAppDispatch } from './redux/store';
import { actions } from './redux/model/toursActions';
import { getAllTours } from './selectors/toursSelectors';
import { useSelector } from 'react-redux';
import { TourType } from './types/Tour.type';

export const Tours: FC = () => {
    const dispatch = useAppDispatch()

    const tours = useSelector(getAllTours)

    React.useEffect(() => {
        dispatch(actions.getAllTours())
    }, [])

    return (
        <div className='tours__wrapper'>
            <div className='tours__container'>
                <div className='tours'>
                    {tours.map((tour: TourType) => (
                        <Tour key={tour.id} tour={tour} />
                    ))}
                </div>
            </div>
        </div>
    )
}