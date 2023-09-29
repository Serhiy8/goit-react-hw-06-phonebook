import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contatcs: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
