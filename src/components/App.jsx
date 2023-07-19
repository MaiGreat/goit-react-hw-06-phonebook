import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './ContactForm/ContactForm.module.css';
import { setContactsFilter } from 'redux/filtersSlice';


import {
  addContact,
  deleteContact,
  setContacts,
} from '../redux/contactsSlice';

const App = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filters = useSelector((state) => { console.log(state); return state.filters }
  );
  
  const dispatch = useDispatch();
console.log(filters);

  const storedContacts = localStorage.getItem('contacts');
  const initialContacts = storedContacts ? JSON.parse(storedContacts) : [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  useEffect(() => {
    dispatch(setContacts(initialContacts));
  }, [dispatch]);

  const filterContacts = (event) => {
    dispatch(setContactsFilter(event.currentTarget.value));
  };

  const handleDeleteClick = (contactId) => {
    dispatch(deleteContact(contactId));
  };
console.log(contacts);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
  

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm />
        <h2 className={css.title}>Contact</h2>
        <Filter onChange={filterContacts} value={filters} />
        <ContactList contacts={filteredContacts} onClick={handleDeleteClick} />
      </div>
    </>
  );
};

export default App;