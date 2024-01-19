import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
};

const url = 'http://localhost:3000/api/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const res = await axios.get(url);
  return res.data;
});

const bookList = (bookItems) => {
  const res = [];
  bookItems.forEach((book) => {
    console.log(book);
    res.push(book);
  });
  return res;
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        const status = state;
        status.books = bookList(action.payload);
        status.isLoading = false;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
