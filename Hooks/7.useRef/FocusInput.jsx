import React, { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        // Đặt focus vào trường input
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <input ref={inputRef} type="text" placeholder=" enter your name" />
            <button onClick={handleFocus} style={{ marginLeft: '10px' }}>
                Focus Input
            </button>
        </div>
    );
};

export default FocusInput;
