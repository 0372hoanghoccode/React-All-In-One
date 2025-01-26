import React, { useRef, useState, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        // Bắt đầu timer
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            // Dọn dẹp interval khi component bị unmount
            clearInterval(intervalRef.current);
        };
    }, []);

    const stopTimer = () => {
        // Dừng timer
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>count: {count} seconds</h2>
            <button onClick={stopTimer}>stop</button>
        </div>
    );
};

export default Timer;
