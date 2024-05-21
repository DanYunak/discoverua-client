import { ErrorMessage, Formik } from 'formik';
import { FC, useState } from 'react';
import { Input } from 'antd'
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useAppDispatch } from './redux/store';
import { actions } from './redux/model/appActions';
import * as Yup from 'yup';
import './LoginWindow.scss'
import { NavLink } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'

type PropsType = {
    onSubmit: (formData: any) => void
}

export const LoginWindow: FC<PropsType> = ({ onSubmit }) => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)

    const dispatch = useAppDispatch()

    const handlePasswordVisibility = () => setIsPasswordHidden(!isPasswordHidden)

    const closeWindow = () => dispatch(actions.setIsLoginWindowOpen(false))

    const loginSchema = Yup.object().shape({
        username: Yup.string()
            .min(4, 'Too Short!')
            .required('Required'),
        password: Yup.string()
            .min(4, 'Too Short!')
            .required('Required')
    })

    return (
        <div className='login__window'>
            <div className='close__window' onClick={closeWindow}><Close /></div>
            <div className='login__window_header'>Увійти</div>
            <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit} validationSchema={loginSchema}>
                {formik =>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='username'>
                            <label className='username__label'>Username</label>
                            <Input size='large' type='text' name='username' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} />
                            <ErrorMessage name='username' component='div' className='error__message' />
                        </div>
                        <div className='password'>
                            <label className='password__label'>Password</label>
                            <Input size='large' name='password' type={isPasswordHidden ? 'password' : 'text'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} value={formik.values.password} />
                            <ErrorMessage name='password' component='div' className='error__message' />
                            {isPasswordHidden
                                ? <VisibilityOffIcon onClick={handlePasswordVisibility} />
                                : <VisibilityIcon onClick={handlePasswordVisibility} />
                            }
                        </div>
                        <div className='btn__actions'>
                            <Button variant='contained' size='large' type='submit'>Увійти</Button>
                            <NavLink to='/signup' onClick={closeWindow}>Зареєструватися</NavLink>
                        </div>
                    </form>
                }
            </Formik>
        </div>
    )
}