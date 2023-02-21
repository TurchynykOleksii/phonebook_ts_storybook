import { Form } from './Form';
import { ContactList } from './ContactList';
import React, { FC } from 'react';
import { Filter } from './Filter';

export const App: FC = () => {
  return (
    <div className="app">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
