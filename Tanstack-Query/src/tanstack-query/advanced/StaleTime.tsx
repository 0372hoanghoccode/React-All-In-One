import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};

const StaleTimeExample: React.FC = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['posts-stale'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 phút
  });

  return (
    <div>
      <h3>Stale Time Example</h3>
      <button onClick={() => refetch()}>Refetch Manually</button>
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {data.slice(0, 3).map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      <p>Dữ liệu được giữ trong cache trong 1 phút trước khi refetch.</p>
    </div>
  );
};

export default StaleTimeExample;
