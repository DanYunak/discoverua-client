import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavMenu.scss';
import PersonIcon from '@mui/icons-material/Person';
import { useAppDispatch } from './redux/store';
import { actions } from './redux/model/appActions';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUsername } from './selectors/userSelectors';
import LogoutIcon from '@mui/icons-material/Logout';
import { actions as userActions } from './redux/model/userActions'

export const NavMenu: FC = () => {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const isLoggedIn = useSelector(getIsLoggedIn)
    const username = useSelector(getUsername)

    const login = () => {
        dispatch(actions.setIsLoginWindowOpen(true))
    }

    const logout = async () => {
        localStorage.setItem('isLoggedIn', JSON.stringify(false))
        localStorage.setItem('username', JSON.stringify(''))
        dispatch(userActions.setIsLoggedIn(false))
        dispatch(userActions.setUsername(''))

        if (window.location.pathname !== '/') {
            navigate('/')
        }
    }

    return (
        <nav className='nav'>
            {isLoggedIn &&
                <div className='nav__username'>{username}</div>
            }
            {window.location.pathname !== '/signup' &&
                <div className='nav__auth'>
                    {isLoggedIn
                        ? <div className='nav__logout' onClick={logout}>
                            <LogoutIcon />
                        </div>
                        : <div className='nav__login' onClick={login}>
                            <PersonIcon />
                        </div>
                    }
                </div>
            }
        </nav >
    )
}