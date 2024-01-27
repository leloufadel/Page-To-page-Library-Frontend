import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  isLoading: true,
};
// I use my rails server on port 3001, so please change it if you want to
const url = 'http://localhost:3000/api/reservations';

export const getReservations = createAsyncThunk('reservations/getReservations', async (userId) => {
  const response = await axios.get(`${url}?user_id=${userId}`);
  return response.data;
});

export const createReservation = createAsyncThunk('reservation/createReservation', async ({ userId, newReservation }) => {
  const response = await axios.post(`${url}?user_id=${userId}`, newReservation);
  return response.data;
});

export const reservationsList = (reservationsItems) => {
  const res = [];
  reservationsItems.forEach((reservation) => {
    res.push(reservation);
  });
  return res;
};

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      const reservation = action.payload;
      state.reservations.push(reservation);
      createReservation(reservation);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getReservations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        const status = state;
        status.reservations = reservationsList(action.payload);
        status.isLoading = false;
      })
      .addCase(getReservations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
