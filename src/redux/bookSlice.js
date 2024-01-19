import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	books: [],
	isLoading: true,
}

const url = 'http://localhost:3000/api/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
    const res = await axios.get(url);
    return res.data;
});

const cartSlice = createSlice({
	name: 'books',
	initialState,
    reducers: {},
    extraReducers: {},
})

export default cartSlice.reducer;