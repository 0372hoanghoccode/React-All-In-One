import React, { useState } from 'react';

const UseStateExample: React.FC = () => {
  //định rõ kiểu dữ liệu cho state
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
    </div>
  );
};

export default UseStateExample;
