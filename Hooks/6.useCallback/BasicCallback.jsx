import React, { useState, useCallback } from 'react';

const BasicCallback = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log(`Button clicked! Current count: ${count}`);
    }, [count]);

    return (
        <div>
            <h2>useCallback Basic Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleClick}>Log Count</button>
        </div>
    );
};

export default BasicCallback;
