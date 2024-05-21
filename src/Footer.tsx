import { FC } from 'react';
import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import { NavLink } from 'react-router-dom';

export const Footer: FC = () => {
    return (
        <footer className='footer'>
            <div className='links'></div>
            <div className='socials'>
                <span>Ми в соцмережах</span>
                <div className='icons'>
                    <NavLink to='https://www.instagram.com/danya.yunak' target='_blank'><InstagramIcon /></NavLink>
                    <FacebookIcon />
                    <TelegramIcon />
                    <XIcon />
                </div>
            </div>
            <div className='navigation'>
                <span>Навігація</span>
                <NavLink to='/signup'>Зареєструватися</NavLink>
            </div>
        </footer>
    )
}