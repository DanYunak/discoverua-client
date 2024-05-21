import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import { userReducer } from './model/userReducer';
import { appReducer } from './model/appReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './model/sagas/rootSaga';
import { toursReducer } from './model/toursReducer';

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    tours: toursReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    devTools: true
})

sagaMiddleware.run(rootSaga)