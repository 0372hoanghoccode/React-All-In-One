import React from 'react';
import './Button.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};