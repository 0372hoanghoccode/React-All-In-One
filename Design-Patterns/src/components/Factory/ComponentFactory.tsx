import React from 'react';

type ComponentType = 'button' | 'link';

export interface FactoryProps {
  type: ComponentType;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const ButtonComponent: React.FC<{ onClick?: () => void; children: React.ReactNode }> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const LinkComponent: React.FC<{ href?: string; children: React.ReactNode }> = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

const ComponentFactory: React.FC<FactoryProps> = ({ type, children, onClick, href }) => {
  switch (type) {
    case 'button':
      return <ButtonComponent onClick={onClick}>{children}</ButtonComponent>;
    case 'link':
      return <LinkComponent href={href}>{children}</LinkComponent>;
    default:
      return null;
  }
};

export default ComponentFactory;
