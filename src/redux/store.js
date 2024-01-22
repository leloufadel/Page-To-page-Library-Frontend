import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import booksReducer from './bookSlice';
import userReducer from './user/userSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    users: userReducer,
    modal: modalReducer,
  },

  middleware: (/* getDefaultMiddleware */) => [thunk],
});

export default store;
