import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Interface định nghĩa cấu trúc Post
interface Post {
  id: number;
  title: string;
  body: string;
}

// fetch posts
const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const WithTanstackQuery: React.FC = () => {
  // useQuery để fetch và quản lý state
  const { data, error, isLoading } = useQuery<Post[], Error>({
    queryKey: ['posts'], // Key unique cho query
    queryFn: fetchPosts, // Hàm fetch data
    staleTime: 1000 * 60 * 5 // Thời gian cache 5 phút
  });

  // trạng thái loading/error
  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>Posts (With TanStack Query)</h3>
      <ul>
        {/* 5 posts đầu tiên */}
        {data?.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.id}:</strong> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WithTanstackQuery;