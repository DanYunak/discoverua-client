import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Input, message } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { ErrorMessage, Formik } from 'formik';
import * as React from 'react';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './ReservePage.scss';
import { getSelectedTour } from './selectors/toursSelectors';

type PropsType = {
    onSubmit: (formData: any) => void
}


export const ReservePage: FC<PropsType> = ({ onSubmit }) => {
    const selectedTour = useSelector(getSelectedTour)

    const navigate = useNavigate()

    const { title, img, price, persons } = selectedTour

    const reserveSchema = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        phone: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
        date: Yup.string()
            .required('Required'),
        persons: Yup.string()
            .required('Required')
    })

    const [date, setDate] = useState<Dayjs | null>(dayjs('2024-05-22'));


    return (
        <div className='reserve__page_wrapper'>
            <div className='reserve__page'>
                <Formik initialValues={{ name: '', email: '', phone: '', persons: '' }} onSubmit={onSubmit} validationSchema={reserveSchema}>
                    {formik =>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='name'>
                                <label className='name__label'>Ім'я</label>
                                <Input size='large' type='text' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                                <ErrorMessage name='name' component='div' className='error__message' />
                            </div>
                            <div className='email'>
                                <label className='email__label'>Email</label>
                                <Input size='large' name='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} value={formik.values.email} />
                                <ErrorMessage name='email' component='div' className='error__message' />
                            </div>
                            <div className='phone'>
                                <label className='phone__label'>Номер телефону</label>
                                <Input size='large' type='text' name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
                                <ErrorMessage name='phone' component='div' className='error__message' />
                            </div>
                            <div className='date'>
                                <label className='date__label'>Дата проведення туру</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        value={date}
                                        onChange={(newDate) => setDate(newDate)}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div className='persons'>
                                <label className='persons__label'>Кількість учасників</label>
                                <Input size='large' type='text' name='persons' onChange={(e) => {
                                    const value = e.target.value
                                    // @ts-ignore
                                    if (value <= persons) {
                                        formik.setFieldValue('persons', value)
                                    } else {
                                        formik.setFieldValue('persons', '')
                                        message.error('Забагато учасників')
                                    }
                                }} onBlur={formik.handleBlur} value={formik.values.persons} />
                                <ErrorMessage name='persons' component='div' className='error__message' />
                            </div>
                            <div className='btn__actions'>
                                <Button variant='contained' size='large' type='submit' onClick={() => {
                                    if (formik.values.email !== '' &&
                                        formik.values.name !== '' &&
                                        formik.values.persons !== '' &&
                                        formik.values.phone !== '' &&
                                        dayjs(date).isAfter(dayjs(), 'day')
                                    ) {
                                        navigate('/')
                                        message.success('Ви успішно забронювали тур')
                                    } else {
                                        if (
                                            formik.values.email === '' ||
                                            formik.values.name === '' ||
                                            formik.values.persons === '' ||
                                            formik.values.phone === ''
                                        ) {
                                            message.error('Не всі поля заповнені');
                                        } else if (!dayjs(date).isAfter(dayjs(), 'day')) {
                                            message.error('Дата повинна бути не раніше завтрашнього дня');
                                        }
                                    }
                                }}>Забронювати тур</Button>
                                <Button variant='contained' color='error' size='large' className='button__back'>
                                    <NavLink to='/'>Повернутися назад</NavLink>
                                </Button>
                            </div>
                        </form>
                    }
                </Formik>
            </div>
            <div className='reserve__page_info'>
                <ul>
                    <li>Поки ти ні за що не платиш</li>
                    <li>Повертаємо різницю в ціні, якщо ти знайшов дешевше і зниження вартості туру є можливим відповідно до умов співпраці з туроператором</li>
                    <li>Допомагаємо з пошуком квитків, візами, спорядженням та будь-якою іншою інформацією</li>
                    <li>Є можливість оплати частинами, якщо до початку туру більше 45 днів</li>
                </ul>
                <div className='tour__info'>
                    <div className='tour__info_content'>
                        <div className='tour__info_img'>
                            <img src={img} />
                        </div>
                        <div className='tour__info_title'>{title}</div>
                        <div className='tour__info_price'>{price}₴</div>
                        <div className='tour__info_persons'>{persons}<PersonIcon /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}