import React, { useState } from "react";

const UseStateAnswers = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>useState</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default UseStateAnswers;

