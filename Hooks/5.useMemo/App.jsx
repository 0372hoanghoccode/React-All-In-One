import React from 'react';
import BasicMemo from './BasicMemo';
import FilteredList from './FilteredList';
import ExpensiveCalculation from './ExpensiveCalculation';

function App() {
    return (
        <div>
            <BasicMemo />
            <FilteredList />
            <ExpensiveCalculation />
        </div>
    );
}

export default App;
