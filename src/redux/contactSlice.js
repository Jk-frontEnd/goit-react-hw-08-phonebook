import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://connections-api.herokuapp.com/';

const getToken = (getState) => getState().auth.token;

const setHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { getState }) => {
    const token = getToken(getState());
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
  async ({ name, number }, { getState }) => {
    const token = getToken(getState());
    try {
      const response = await axios.post(baseUrl, { name, number }, setHeaders(token));
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { getState }) => {
    const token = getToken(getState());
    try {
      await axios.delete(`${baseUrl}/${contactId}`, setHeaders(token));
      return contactId;
    } catch (error) {
      throw error;
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, updatedData }, { getState }) => {
    const token = getToken(getState());
    try {
      const response = await axios.patch(`${baseUrl}/${contactId}`, updatedData, setHeaders(token));
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
    error: null,
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
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const selectAllContacts = (state) => state.contacts.items;
export const selectContactsLoading = (state) => state.contacts.isLoading;
export const selectContactsError = (state) => state.contacts.error;

export const contactsReducer = contactsSlice.reducer;
