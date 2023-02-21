import css from '../Form/Form.module.css';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter: FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChange = (e: { target: HTMLInputElement }) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        className={css.input}
        value={filter}
        type="text"
        onChange={handleChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
