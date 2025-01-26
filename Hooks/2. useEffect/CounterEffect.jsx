import React, { useState, useEffect } from 'react';

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  // Cập nhật tiêu đề trang mỗi khi giá trị count thay đổi
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);  // Dependency array, runs only when count changes

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterEffect;
