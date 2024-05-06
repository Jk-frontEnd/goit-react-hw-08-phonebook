import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://connections-api.herokuapp.com';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }) => {
    const response = await axios.post(`${apiUrl}/users/signup`, { name, email, password });
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    try {
      const response = await axios.post(`${apiUrl}/users/login`, { email, password });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { getState }) => {
    const { token } = getState().auth;
    if (!token) {
      return { error: 'Token is not available' };
    }
    try {
      const response = await axios.post(`${apiUrl}/users/logout`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { getState }) => {
    const { token } = getState().auth;
    if (!token) {
      return { error: 'Token is not available' };
    }
    try {
      const response = await axios.get(`${apiUrl}/users/current`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
     .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
     .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
     .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.user = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;