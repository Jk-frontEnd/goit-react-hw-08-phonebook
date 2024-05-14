import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://connections-api.herokuapp.com/';
const tokenSelector = (state) => state.auth.token;

const setHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI, { getState }) => {
    const token = tokenSelector(thunkAPI.getState());
    try {
      const response = await axios.get(baseUrl, setHeaders(token));
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const token = tokenSelector(thunkAPI.getState());
      const response = await axios.post(`${baseUrl}contacts`, { name, number }, setHeaders(token));
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ contactId }, thunkAPI) => {
    console.log('contactId:', contactId); // add this line
    try {
      const token = tokenSelector(thunkAPI.getState());
      await axios.delete(`${baseUrl}contacts/${contactId}`, setHeaders(token));
      return contactId;
    } catch (error) {
      console.log(error)
      return { error: 'Failed to delete contact', status: error.response.status };
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, updatedData }, thunkAPI) => {
    try {
      const token = tokenSelector(thunkAPI.getState());
      const response = await axios.patch(`${baseUrl}/${contactId}`, updatedData, setHeaders(token));
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    loading: {
      fetchContacts: false,
      addContact: false,
      deleteContact: false,
      updateContact: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.loading.fetchContacts = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loading.fetchContacts = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.loading.fetchContacts = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const selectAllContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const contactsReducer = contactsSlice.reducer;