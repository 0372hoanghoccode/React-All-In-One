import React, { useReducer, useState } from 'react';
import { counterReducer, initialState } from './counterReducer';

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [amount, setAmount] = useState(1);

    const handleChange = (e) => {
        setAmount(Number(e.target.value));
    };

    return (
        <div>
            <h2>Counter: {state.count}</h2>
            <input
                type="number"
                value={amount}
                onChange={handleChange}
                placeholder="Enter amount"
            />
            <button onClick={() => dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: amount })}>
                Increase by {amount}
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT_BY_AMOUNT', payload: amount })}>
                Decrease by {amount}
            </button>
        </div>
    );
};

export default Counter;
