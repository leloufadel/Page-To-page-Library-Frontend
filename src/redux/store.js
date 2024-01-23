import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice';
import reservationsReducer from './reservationSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    reservations: reservationsReducer,
  },
});

export default store;
