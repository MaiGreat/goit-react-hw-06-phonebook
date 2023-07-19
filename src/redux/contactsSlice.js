import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [1, 2, 3] },
    reducers: {
        setContacts: (state, action) => {
            state.contacts = action.payload;
        },
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(
                (contact) => contact.id !== action.payload
            );
        },
    },
});

export const {
    setContacts,
    addContact,
    deleteContact,
} = contactsSlice.actions;

export default contactsSlice.reducer;