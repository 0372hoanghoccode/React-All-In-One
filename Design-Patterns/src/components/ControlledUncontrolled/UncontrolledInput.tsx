import React, { useRef } from 'react';

const UncontrolledInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    alert(`Input value: ${inputRef.current?.value}`);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>Uncontrolled Input: </label>
      <input ref={inputRef} defaultValue="default text" style={{ marginRight: '0.5rem' }} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UncontrolledInput;
