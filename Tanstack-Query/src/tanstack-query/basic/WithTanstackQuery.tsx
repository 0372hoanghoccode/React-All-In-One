import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const WithTanstackQuery: React.FC = () => {
  const { data, error, isLoading } = useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5 // 5 phút
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>Posts (With TanStack Query)</h3>
      <ul>
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
