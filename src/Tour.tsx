import { FC } from 'react';
import './Tour.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { TourType } from './types/Tour.type';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from './redux/store';
import { actions } from './redux/model/toursActions';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from './selectors/userSelectors';
import { message } from 'antd';

type PropsType = {
    tour: TourType
}

export const Tour: FC<PropsType> = ({ tour }) => {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const isLoggedIn = useSelector(getIsLoggedIn)

    const { id, city, title, price, duration, persons, img } = tour

    const selectTour = () => {
        if (isLoggedIn) {
            dispatch(actions.setSelectedTour(tour))
            navigate(`/tours/${id}`)
        } else {
            message.error('Для бронювання необідно увійти в аккаунт')
        }
    }

    return (
        <div className='tour'>
            <div className='tour__photo'>
                <img src={img} />
            </div>
            <div className='tour__info'>
                <div className='tour__city'><LocationOnIcon />{city}</div>
                <div className='tour__title'>{title}</div>
                <div className='tour__price'>{price}₴</div>
                <div className='tour__reserve'>
                    <Button variant='contained' onClick={selectTour}>Забронювати</Button>
                </div>
                <div className='tour__customers'>
                    <div className='tour__duration'><CalendarMonthIcon />{duration}</div>
                    <div className='tour__persons'><PersonIcon />{persons}</div>
                </div>
            </div>
        </div>
    )
}