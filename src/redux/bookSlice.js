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
  Object.keys(bookItems).forEach((id) => {
    const book = bookItems[id][0];
    book.item_id = id;
    res.push(book);
  });
  return res;
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state) => {
      const status = state;
      status.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      const status = state;
      status.books = bookList(action.payload);
      status.isLoading = false;
    },
    [getBooks.rejected]: (state) => {
      const status = state;
      status.isLoading = false;
    },
  },
});

export default bookSlice.reducer;
