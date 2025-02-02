import React from 'react';

//type alias để định nghĩa props
type ButtonProps = {
  label: string;
  onClick: () => void;
};

const AlternativeComponent: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default AlternativeComponent;
