import React, { FC, ReactNode } from 'react';
import css from './Button.module.css';
import '../../index.css';

interface ButtonProps {
  primary?: boolean;

  backgroundColor?: string;
  color?: string;

  size?: 'small' | 'medium' | 'large';

  label: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  backgroundColor,
  color,
  label,
  size = 'medium',
}) => {
  return (
    <button
      className={`${css.button} ${size}`}
      type="submit"
      style={{ backgroundColor, color }}
    >
      {label}
    </button>
  );
};
