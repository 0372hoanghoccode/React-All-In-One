import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPostsByPage = async (page: number) => {
  // Giả sử mỗi trang có 10 bài viết
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const allPosts = res.data;
  const start = (page - 1) * 10;
  return allPosts.slice(start, start + 10);
};

const Pagination: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => fetchPostsByPage(page),
    staleTime: 5000
  });

  return (
    <div>
      <h3>Pagination Example</h3>
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
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Prev
        </button>
        <span style={{ margin: '0 10px' }}>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
