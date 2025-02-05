import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const PostsList: React.FC<{ title: string }> = ({ title }) => {
  const { data, isLoading } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });
  return (
    <div>
      <h4>{title}</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {(data as any[]).slice(0, 3).map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Deduplication: React.FC = () => {
  return (
    <div>
      <h3>Deduplication Example</h3>
      <PostsList title="List 1" />
      <PostsList title="List 2" />
      <p>Cả hai component trên đều sử dụng cùng 1 query key, do đó chỉ gọi API 1 lần.</p>
    </div>
  );
};

export default Deduplication;
