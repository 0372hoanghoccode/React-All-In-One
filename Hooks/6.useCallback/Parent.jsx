import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('Child re-rendered!');
  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleChildClick = useCallback(() => {
    console.log('Child button clicked!');
  }, []);

  return (
    <div>
      <h2>useCallback with Child Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleChildClick} />
    </div>
  );
};

export default Parent;
