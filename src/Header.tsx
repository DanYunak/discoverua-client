import './Header.scss';
import { NavMenu } from './NavMenu';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <NavLink to='/'>DiscoverUA</NavLink>
            </div>
            <NavMenu />
        </header>
    )
}