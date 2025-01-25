import React, { useState, useCallback } from 'react';

const EventHandlers = () => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = useCallback(() => {
        console.log('Mouse entered!');
        setHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        console.log('Mouse left!');
        setHovered(false);
    }, []);

    return (
        <div>
            <h2>Event Handlers with useCallback</h2>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: hovered ? 'lightblue' : 'lightgray',
                    textAlign: 'center',
                    lineHeight: '200px',
                }}
            >
                Hover over me!
            </div>
        </div>
    );
};

export default EventHandlers;
