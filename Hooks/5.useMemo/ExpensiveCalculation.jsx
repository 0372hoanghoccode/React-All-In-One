import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = () => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    const slowCalculation = (num) => {
        console.log('Calculating...');
        for (let i = 0; i < 1000000000; i++) { } // Giả lập tính toán phức tạp
        return num * 2;
    };

    const calculatedValue = useMemo(() => slowCalculation(count), [count]);

    return (
        <div>
            <h2>Expensive Calculation Example</h2>
            <p>Calculated Value: {calculatedValue}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>Increase Count</button>
            <button onClick={() => setShow((prev) => !prev)}>
                Toggle Show ({show ? 'On' : 'Off'})
            </button>
        </div>
    );
};

export default ExpensiveCalculation;

//slowCalculation chỉ được chạy lại khi giá trị count thay đổi.
//ao tác toggle show không ảnh hưởng đến hiệu suất vì không kích hoạt việc tính toán lại.
