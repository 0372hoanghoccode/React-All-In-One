import React from 'react';
import FocusInput from './FocusInput';
import Timer from './Timer';

const App = () => {
    return (
        <div>
            <h1>React useRef Exercise</h1>
            <hr />
            <h2>1. Focus Input</h2>
            <FocusInput />
            <hr />
            <h2>2. Timer</h2>
            <Timer />
        </div>
    );
};

export default App;
