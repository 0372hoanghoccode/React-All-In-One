import React, { useState, useCallback } from 'react';

const FilteredList = ({ filter }) => {
    console.log('FilteredList re-rendered!');
    return (
        <ul>
            {filter.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

const FilteredListCallback = () => {
    const [query, setQuery] = useState('');
    const [items] = useState(['React', 'JavaScript', 'TypeScript', 'Node.js']);

    const filteredItems = useCallback(() => {
        return items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    }, [query, items]);

    return (
        <div>
            <h2>Filtered List with useCallback</h2>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <FilteredList filter={filteredItems()} />
        </div>
    );
};

export default FilteredListCallback;
