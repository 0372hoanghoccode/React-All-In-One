import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'outlined' | 'underlined';
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  variant = 'default',
  ...props
}) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input 
        className={`input input-${variant} ${error ? 'input-error' : ''}`}
        {...props}
      />
      {error && <span className="input-error-text">{error}</span>}
    </div>
  );
};