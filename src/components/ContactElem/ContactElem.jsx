import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import css from './ContactElem.module.css'
import { ReactComponent as Icon } from '../../img/bin.svg';

const ContactElem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item} key={contact.id}>
      •  {contact.name}: {contact.number}
      <button className={css.btn} onClick={handleDelete}><Icon className={css.bin} /></button>
    </li>
  );
};

export { ContactElem };