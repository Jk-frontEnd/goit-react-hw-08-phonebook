import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authSlice'; // Import authReducer from authSlice

const rootReducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer, // Include authReducer in the rootReducer
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
