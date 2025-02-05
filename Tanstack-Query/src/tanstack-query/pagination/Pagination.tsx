import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Hàm fetch posts theo trang
const fetchPostsByPage = async (page: number) => {
  // Lấy toàn bộ posts
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const allPosts = res.data;
  
  // Tính toán posts cho từng trang
  const start = (page - 1) * 10;
  return allPosts.slice(start, start + 10);
};

const Pagination: React.FC = () => {
  // State quản lý trang hiện tại
  const [page, setPage] = useState<number>(1);
  
  // Fetch posts với key phụ thuộc vào page
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', page], // Key thay đổi theo trang
    queryFn: () => fetchPostsByPage(page), // Fetch posts của trang
    staleTime: 5000 // Thời gian cache
  });

  return (
    <div>
      <h3>Pagination Example</h3>
      {/* Xử lý trạng thái loading/error/success */}
      {isLoading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p>Error loading posts</p>
      ) : (
        <ul>
          {data.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}

      {/* Điều khiển phân trang */}
      <div style={{ marginTop: '10px' }}>
        {/* Nút prev có điều kiện disable */}
        <button 
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))} 
          disabled={page === 1}
        >
          Prev
        </button>
        <span style={{ margin: '0 10px' }}>Page {page}</span>
        {/* Nút next */}
        <button onClick={() => setPage((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;