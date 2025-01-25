import React, { useState, useMemo } from 'react';

const FilteredList = () => {
    const [search, setSearch] = useState('');
    const [items] = useState([
        'React',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'HTML',
        'CSS',
    ]);

    const filteredItems = useMemo(() => {
        console.log('Filtering items...');
        return items.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, items]);

    return (
        <div>
            <h2>Filtered List</h2>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilteredList;

//filteredItems chỉ được tính lại khi giá trị search hoặc items thay đổi.
//Việc lọc không bị lặp lại nếu không có thay đổi liên quan, giúp tối ưu hiệu suất.
