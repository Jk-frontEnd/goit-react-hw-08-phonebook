import React from 'react';
import { Form } from '../../components/Form/Form';
import { Search } from '../../components/Search/Search';
import { ContactList } from '../../components/ContactList/ContactList';

const Contacts = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Search />
      <ContactList />
    </div>
  );
};

export default Contacts;
