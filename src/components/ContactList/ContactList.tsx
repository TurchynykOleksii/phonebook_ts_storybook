import css from './ContactList.module.css';
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import type { StateObj } from '../../types/types';

export const ContactList: FC = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state: StateObj) => {
    return state.contacts.items.filter(el => {
      return el.name.toLowerCase().includes(state.filter.toLowerCase());
    });
  });
  const del = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.list}>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={css.listItem}>
                <span className={css.span}>
                  {name}: {number}
                </span>
                <button
                  className={css.button}
                  type="button"
                  onClick={() => del(id)}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
