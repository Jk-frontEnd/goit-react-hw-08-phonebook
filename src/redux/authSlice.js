import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/me');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isLoggedIn: true,
        };
      })
      .addCase(logIn.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isLoggedIn: true,
        };
      })
      .addCase(logOut.fulfilled, state => {
        return {
          ...state,
          user: { name: null, email: null },
          token: null,
          isLoggedIn: false,
        };
      })
      .addCase(refreshUser.pending, state => {
        return {
          ...state,
          isRefreshing: true,
        };
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
          isRefreshing: false,
        };
      })
      .addCase(refreshUser.rejected, state => {
        return {
          ...state,
          isRefreshing: false,
        };
      });
  },
});


export const authReducer = authSlice.reducer;
