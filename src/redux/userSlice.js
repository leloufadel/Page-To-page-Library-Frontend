import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'http://localhost:3000/';

const initialToken = localStorage.getItem('token') || null;

let userData = null;
try {
  userData = JSON.parse(localStorage.getItem('user')) || null;
} catch (error) {
  console.error('Error parsing user data:', error);
}

const initialState = {
  auth_token: initialToken,
  isLoggedIn: false,
  user: userData,
  headers: {},
};

export const verifyUser = createAsyncThunk('user/verifyUser', async ({ token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${BASE_URL}verify`, {}, config);
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload?.data.user || initialState.user;
      state.user.role = action.payload?.data.user.role || initialState.user.role;
      state.auth_token = localStorage.getItem('token');
      state.isLoggedIn = action.payload.data.loading;
      if (state.isLoggedIn) {
        toast.success(action.payload.data.message);
      } else {
        toast.error(action.payload.data.message);
      }
    },
    setUserInfoFromToken: (state, action) => {
      state.user = action.payload.data.user;
      state.user.role = action.payload.data.user.role;
      state.isLoggedIn = action.payload.data.loading;
      state.auth_token = localStorage.getItem('token');
      if (state.isLoggedIn) {
        toast.success(action.payload.data.message);
      }
    },
    resetUserInfo: (state) => {
      state.isLoggedIn = false;
      state.auth_token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
  extraReducers(builder) {
    builder
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.user.role = 'admin';
        toast.success(action.payload.message);
      })
      .addCase(verifyUser.rejected, (action) => {
        toast.error(action.payload.message);
      });
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
      user: response.data.user,
    }));
    localStorage.setItem('token', response.headers.get('Authorization'));
    localStorage.setItem('user', JSON.stringify(response.data.user));
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
  try {
    const { user } = getState().users;
    const token = localStorage.getItem('token');
    if (user && token) {
      const config = {
        headers: {
          authorization: String(token),
        },
      };
      await axios.delete(`${BASE_URL}users/sign_out`, config);
      toast.success('User logged out successfully');
      dispatch(resetUserInfo());
      return '';
    }
    toast.error('User or auth_token is undefined');
    return '';
  } catch (error) {
    toast.error('Error logging out:', error);
    return Promise.reject(error);
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
