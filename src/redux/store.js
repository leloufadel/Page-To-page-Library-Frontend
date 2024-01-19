import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
