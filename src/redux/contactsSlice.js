import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsDefault = [
  { id: nanoid(), userName: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), userName: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), userName: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), userName: 'Annie Copeland', number: '227-91-26' },
];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [...contactsDefault] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(contactName, contactNumber) {
        return {
          payload: {
            id: nanoid(),
            userName: contactName,
            number: contactNumber,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
