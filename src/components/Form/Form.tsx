import React, { useState, FC, FormEvent } from 'react';
import { addContact } from '../../redux/contactSlice';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { Button } from '../Button/Button';

import type { ContactStateObj } from '../../types/types';
import css from './Form.module.css';

export const Form: FC = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handelInputChange = (e: { target: HTMLInputElement }) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onChangeForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      contacts.some(
        (el: ContactStateObj) => el.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`We already have ${name}`);
    }

    dispatch(addContact({ name: name, number: number, id: nanoid() }));
    reset();
  };

  return (
    <form onSubmit={onChangeForm} className={css.form}>
      <label className={css.label}>
        <span className={css.span}>Name:</span>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handelInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        <span className={css.span}>Phone:</span>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handelInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button label="add contact" />
    </form>
  );
};
