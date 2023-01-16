import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // Filtering contacts by name
  const getFilteredContacts = filterName => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  };

  // Preparing contacts to render(filtered or all)
  const contactsToShow =
    filter.length > 0 ? getFilteredContacts(filter) : contacts;

  return (
    <ul>
      {contactsToShow.map((contact, id) => (
        <li className={css.contactList__item} key={id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.contactList__btn}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
