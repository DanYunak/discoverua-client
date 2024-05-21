import { FC } from 'react';
import backgroundPhoto from './images/photo.png';
import './Search.scss';
import { SearchBar } from './SearchBar';

export const Search: FC = () => {
    return (
        <div className='search'>
            <picture className='background__photo'>
                <img src={backgroundPhoto} alt='Info photo' />
            </picture>
            <div className='search__info'>
                <div className='search__title'>ПОДОРОЖІ ПО УКРАЇНІ</div>
                <div className='search__city'>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}