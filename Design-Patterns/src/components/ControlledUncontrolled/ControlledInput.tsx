import React, { useState } from 'react';

const ControlledInput: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>Controlled Input: </label>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        style={{ marginRight: '0.5rem' }}
      />
      <span>Value: {value}</span>
    </div>
  );
};

export default ControlledInput;
