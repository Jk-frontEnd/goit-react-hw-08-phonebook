import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectAuthToken } from './authSlice';
import axios from 'axios';

const baseUrl = 'https://connections-api.herokuapp.com/contacts';
const tokenSelector = (state) => state.auth.token;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const token = tokenSelector(thunkAPI.getState());
    try {
      const response = await axios.get(baseUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const token = selectAuthToken();
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await axios.post(`${baseUrl}/contacts`, { name, number });
      return response.data;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    const token = selectAuthToken();
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      await axios.delete(`${baseUrl}/contacts/${contactId}`);
      return contactId;
    }
  }
);


export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, updatedData }, thunkAPI) => {
    const token = tokenSelector(thunkAPI.getState());
    try {
      const response = await axios.patch(`${baseUrl}/${contactId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
      });
  },
});

export const selectAllContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const contactsReducer = contactsSlice.reducer;