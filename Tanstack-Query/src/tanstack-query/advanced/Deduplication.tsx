import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// fetch all post
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

// Component con hiện ds posts
const PostsList: React.FC<{ title: string }> = ({ title }) => {
  // useQuery với query key cố định
  const { data, isLoading } = useQuery({ 
    queryKey: ['posts'], // Cùng một query key
    queryFn: fetchPosts 
  });

  return (
    <div>
      <h4>{title}</h4>
      {/* Xử lý loading */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {/*hiện 3 post đầu tiên*/}
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
      {/* 2 component con với cùng query key */}
      <PostsList title="List 1" />
      <PostsList title="List 2" />
      <p>Cả hai component trên đều sử dụng cùng 1 query key, do đó chỉ gọi API 1 lần.</p>
    </div>
  );
};

export default Deduplication;