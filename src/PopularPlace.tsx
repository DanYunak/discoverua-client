import { FC } from 'react';
import './PopularPlace.scss';

type PropsType = {
    photo: string
    name: string
}

export const PopularPlace: FC<PropsType> = ({ photo, name }) => {
    return (
        <div className='popular__place'>
            <div className='popular__place_photo'>
                <img src={photo} />
            </div>
            <div className='popular__place_name'>{name}</div>
        </div>
    )
}