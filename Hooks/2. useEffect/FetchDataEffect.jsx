import React, { useState, useEffect } from 'react';

const FetchDataEffect = () => {
    const [data, setData] = useState(null);

    // Lấy dữ liệu từ API khi component được mount
    useEffect(() => {
        const fetchData = async () => {
            // Gửi yêu cầu fetch đến API
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            // Chuyển đổi dữ liệu trả về thành JSON
            const result = await response.json();
            // Cập nhật state với dữ liệu đã lấy
            setData(result);
        };

        fetchData(); // Gọi hàm lấy dữ liệu
    }, []); // Mảng phụ thuộc rỗng, chỉ chạy khi component được mount lần đầu

    return (
        <div>
            <h1>Fetch Data Example</h1>
            {data ? (
                <div>
                    <h2>First Post Title:</h2>
                    <p>{data[0].title}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default FetchDataEffect;
