import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// fetch posts
const fetchPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};

const StaleTimeExample: React.FC = () => {
  // useQuery với staleTime
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['posts-stale'], // Key cho query
    queryFn: fetchPosts, // Hàm fetch posts
    staleTime: 1000 * 60, // Thời gian cache 1 phút
  });

  return (
    <div>
      <h3>Stale Time Example</h3>
      {/* Nút manual refetch */}
      <button onClick={() => refetch()}>Refetch Manually</button>
      
      {/*trạng thái loading/success */}
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