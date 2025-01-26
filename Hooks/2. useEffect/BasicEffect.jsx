import React, { useEffect } from 'react';

const BasicEffect = () => {
    useEffect(() => {
        console.log('Component has mounted!');
    }, []);

    return (
        <div>
            <p>Check the console to see the log message when this component mounts.</p>
        </div>
    );
};

export default BasicEffect;
