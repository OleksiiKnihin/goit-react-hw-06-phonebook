import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContacrList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <h1>Your phonebook</h1>
      <ContactForm />

      <h2>Contacts from your phonebook</h2>
      <div className={css.list_contact}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
