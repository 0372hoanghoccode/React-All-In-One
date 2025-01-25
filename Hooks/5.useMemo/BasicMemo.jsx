import React, { useState, useMemo } from 'react';

const BasicMemo = () => {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');

    const factorial = useMemo(() => {
        console.log('Calculating factorial...');
        const calculateFactorial = (n) => (n <= 0 ? 1 : n * calculateFactorial(n - 1));
        return calculateFactorial(number);
    }, [number]);

    return (
        <div>
            <h2>useMemo Example</h2>
            <div>
                <label>Enter a number: </label>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(Number(e.target.value))}
                />
            </div>
            <p>Factorial: {factorial}</p>
            <div>
                <label>Update text: </label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <p>Text: {text}</p>
        </div>
    );
};

export default BasicMemo;

//factorial chỉ được tính lại khi giá trị number thay đổi, tránh việc tính toán lại không cần thiết nếu chỉ thay đổi text.
