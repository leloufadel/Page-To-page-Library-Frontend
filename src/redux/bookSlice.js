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

export const createBook = createAsyncThunk('book/createBook', async (newBook) => {
  const response = await axios.post(url, newBook);
  return response.data;
});

export const removeBook = createAsyncThunk('book/removeBook', async (bookId) => {
  await axios.delete(`${url}/${bookId}`);
  return bookId;
});

const bookList = (bookItems) => {
  const res = [];
  bookItems.forEach((book) => {
    res.push(book);
  });
  return res;
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      state.books.push(book);
      createBook(book);
    },
    deleteBook: (state, action) => {
      const bookId = action.payload;
      removeBook(bookId);
      return { ...state, books: state.books.filter((item) => item.id !== bookId) };
    },
  },
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

export const { addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
