import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import { Header } from './Header';
import { LoginWindow } from './LoginWindow';
import { MainPage } from './MainPage';
import { actions as userActions } from './redux/model/userActions';
import { useAppDispatch } from './redux/store';
import { ReservePage } from './ReservePage';
import { getIsLoginWindowOpen } from './selectors/appSelectors';
import { SignupWindow } from './SignupWindow';
import { Tours } from './Tours';
import { actions as toursActions } from './redux/model/toursActions';
import { useState } from 'react';
import { TourType } from './types/Tour.type';

export const App = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isLoginWindowOpen = useSelector(getIsLoginWindowOpen)

  const onSubmitLogin = (formData: any) => dispatch(userActions.login(formData))

  const onSubmitSignup = (formData: any) => {
    dispatch({ type: 'SIGNUP', formData, navigate })
  }

  const onSubmitReserve = (formData: any) => dispatch(toursActions.reserveTour(formData))

  return (
    <div className='app__container'>
      <div className='app'>
        {isLoginWindowOpen && <LoginWindow onSubmit={onSubmitLogin} />}
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/signup' element={<SignupWindow onSubmit={onSubmitSignup} />} />
          <Route path='/tours/:id' element={<ReservePage onSubmit={onSubmitReserve} />} />
        </Routes>
      </div>
    </div>
  );
}