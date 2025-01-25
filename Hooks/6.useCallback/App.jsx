import React from 'react';
import BasicCallback from './BasicCallback';
import Parent from './Parent';
import FilteredListCallback from './FilteredListCallback';
import EventHandlers from './EventHandlers';

function App() {
    return (
        <div>
            <BasicCallback />
            <Parent />
            <FilteredListCallback />
            <EventHandlers />
        </div>
    );
}

export default App;
