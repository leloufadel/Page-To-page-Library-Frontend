import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './bookSlice';
import userReducer from './userSlice';
import modalReducer from './modalSlice';
import reservationsReducer from './reservationSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    users: userReducer,
    modal: modalReducer,
    reservations: reservationsReducer,
  },

  middleware: (/* getDefaultMiddleware */) => [thunk],
});

export default store;
