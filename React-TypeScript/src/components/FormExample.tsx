import React, { useRef, FormEvent } from 'react';

const FormExample: React.FC = () => {
  // useRef với kiểu HTMLInputElement
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
      inputRef.current.value = ''; // clear sau submit
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
