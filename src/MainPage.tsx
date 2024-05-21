import { Search } from './Search';
import { FC } from 'react';
import { PopularPlaces } from './PopularPlaces';
import { Footer } from './Footer';
import { Tours } from './Tours';

export const MainPage: FC = () => {
    return (
        <>
            <Search />
            <Tours />
            {/* <PopularPlaces /> */}
            <Footer />
        </>
    )
}