import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// fetch post với độ trễ mô phỏng thời gian request
const fetchPost = async (postId: number) => {
  // Giả chậm của request bằng setTimeout
  await new Promise((resolve) => setTimeout(resolve, postId * 200));
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return response.data;
};

const RaceCondition: React.FC = () => {
  // quản lý ID post hiện tại
  const [postId, setPostId] = useState<number>(1);

  // useQuery với key phụ thuộc vào postId
  const { data, error, isLoading } = useQuery<any, Error>({
    queryKey: ['post', postId], // Key thay đổi theo postId
    queryFn: () => fetchPost(postId), // Fetch post theo ID
    staleTime: 5000 // Thời gian cache
  });

  return (
    <div>
      <h3>Race Condition Example</h3>
      <div>
        {/* Nút điều khiển ID post */}
        <button onClick={() => setPostId((prev) => Math.max(prev - 1, 1))}>Prev</button>
        <span style={{ margin: '0 10px' }}>Post ID: {postId}</span>
        <button onClick={() => setPostId((prev) => prev + 1)}>Next</button>
      </div>
      
      {/* trạng thái loading/error/success */}
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