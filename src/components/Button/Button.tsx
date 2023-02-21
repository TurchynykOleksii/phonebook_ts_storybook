import React, { FC, ReactNode } from 'react';
import css from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className={css.button} type="submit">
      {children}
    </button>
  );
};
