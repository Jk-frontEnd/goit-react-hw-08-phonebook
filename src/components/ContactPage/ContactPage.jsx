import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/select';
import { fetchAllContacts } from '../../redux/operations';
import {ContactList} from '../ContactList/ContactList';
import {ContactElem} from '../ContactElem/ContactElem'; 

const ContactsPage = () => {
  const [isAddingContact, setIsAddingContact] = useState(false);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleAddContactClick = () => {
    setIsAddingContact(true);
  };

  const handleCloseForm = () => {
    setIsAddingContact(false);
  };

  return (
    <div>
      <h1>Contacts</h1>
      {isAddingContact ? (
        <ContactElem onClose={handleCloseForm} />
      ) : (
        <>
          <button onClick={handleAddContactClick}>Add Contact</button>
          {contacts.length > 0 && <ContactList />}
          {contacts.length === 0 && <p>No contacts found.</p>}
        </>
      )}
    </div>
  );
};

export default ContactsPage;