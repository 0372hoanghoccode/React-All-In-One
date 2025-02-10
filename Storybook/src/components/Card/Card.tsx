import React from 'react';

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  variant = 'default'
}) => {
  return (
    <div className={`card card-${variant}`}>
      {title && <div className="card-title">{title}</div>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};