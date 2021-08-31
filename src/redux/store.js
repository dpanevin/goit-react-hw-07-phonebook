/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from '@reduxjs/toolkit';
import pbReducer from './phonebook/pb-reducer';

const store = configureStore({
  reducer: pbReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default { store };
