import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'http://localhost:3000/';

const tokenKey = 'auth_token';

const initialToken = localStorage.getItem(tokenKey) || null;

const initialState = {
  auth_token: initialToken,
  isLoggedIn: false,
  user: {
    id: null,
    name: null,
    email: null,
    password: null,
  },
  headers: {},
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload?.data.user || initialState.user;
      state.auth_token = String(action.payload?.authorization || '');
      if (action.payload?.headers && typeof action.payload.headers.entries === 'function') {
        state.headers = Object.fromEntries(Array.from(action.payload.headers.entries()));
      }
      state.isLoggedIn = action.payload.data.loading;
      if (state.isLoggedIn) {
        toast.success(action.payload.data.message);
      }else{
        toast.error(action.payload.data.message);
      }
    },
    setUserInfoFromToken: (state, action) => {
      state.user = action.payload.data.user;
      state.isLoggedIn = action.payload.data.loading;
      state.auth_token = localStorage.getItem('auth_token'); state.isLoggedIn = true;
      if (state.isLoggedIn) {
        toast.success(action.payload.data.message);
      }
    },
    resetUserInfo: (state) => {
      state.isLoggedIn = false;
      state.user = initialState.user;
      state.auth_token = null;
    },
  },
});

export const { setUserInfo, setUserInfoFromToken, resetUserInfo } = userSlice.actions;

export const registerUser = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}users`, payload);
    dispatch(setUserInfo(response));
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loginUser = (payload) => async (dispatch) => {
  try {
    const { headers, ...rest } = payload;
    const response = await axios.post(`${BASE_URL}users/sign_in`, rest, { headers });
    dispatch(setUserInfo({
      data: response.data,
      authorization: headers?.authorization || '',
      headers,
    }));
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      toast.error('Invalid email or password. Please try again.');
      throw new Error('Invalid email or password. Please try again.');
    } else {
      toast.error('An unexpected error occurred. Please try again later.');
      throw new Error('An unexpected error occurred. Please try again later.');
    }
  }
};

export const logoutUser = () => async (dispatch, getState) => {
  const { user } = getState();
  if (user && user.auth_token) {
    const config = {
      headers: {
        authorization: String(user.auth_token),
      },
    };
    try {
      await axios.delete(`${BASE_URL}users/sign_out`, config);
      dispatch(resetUserInfo());
      return '';
    } catch (error) {
      return Promise.reject(error);
    }
  } else {
    console.error('User or auth_token is undefined');
    return '';
  }
};

export const loginUserWithToken = (payload) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: String(payload.auth_token),
    },
  };
  try {
    const response = await axios.get(`${BASE_URL}member-data`, config);
    dispatch(setUserInfoFromToken(response));
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default userSlice.reducer;
