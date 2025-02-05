import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPost = async (postId: number) => {
  // Giả lập thời gian chậm của request bằng setTimeout
  await new Promise((resolve) => setTimeout(resolve, postId * 200));
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return response.data;
};

const RaceCondition: React.FC = () => {
  const [postId, setPostId] = useState<number>(1);

  const { data, error, isLoading } = useQuery<any, Error>({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId),
    staleTime: 5000
  });

  return (
    <div>
      <h3>Race Condition Example</h3>
      <div>
        <button onClick={() => setPostId((prev) => Math.max(prev - 1, 1))}>Prev</button>
        <span style={{ margin: '0 10px' }}>Post ID: {postId}</span>
        <button onClick={() => setPostId((prev) => prev + 1)}>Next</button>
      </div>
      {isLoading ? (
        <div>Loading post...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default RaceCondition;
