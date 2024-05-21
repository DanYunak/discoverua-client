import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { Input } from 'antd';
import { ErrorMessage, Formik } from 'formik';
import { FC, useState } from 'react';
import * as Yup from 'yup';
import { useAppDispatch } from './redux/store';
import './SignupWindow.scss';

type PropsType = {
    onSubmit: (formData: any) => void
}

export const SignupWindow: FC<PropsType> = ({onSubmit}) => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)

    const handlePasswordVisibility = () => setIsPasswordHidden(!isPasswordHidden)

    const signupSchema = Yup.object().shape({
        username: Yup.string()
            .min(4, 'Too Short!')
            .required('Required'),
        password: Yup.string()
            .min(4, 'Too Short!')
            .required('Required')
    })

    return (
        <div className='signup__window_wrapper'>
            <div className='signup__window'>
                <div className='signup__window_header'>Реєстрація</div>
            <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit} validationSchema={signupSchema}>
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
                            <Button variant='contained' size='large' type='submit'>Зареєструватися</Button>
                        </div>
                    </form>
                }
            </Formik>
            </div>
        </div>
    )
}