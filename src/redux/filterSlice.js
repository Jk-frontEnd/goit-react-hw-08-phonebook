import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setContactsFilter: {
      reducer: (state, action) => {
        return action.payload;
      },
      prepare: inputValue => {
        return {
          payload: inputValue,
        };
      },
    },
  },
});

export const { setContactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectFilter = createSelector(
  (state) => state.filter,
  (filter) => filter
);