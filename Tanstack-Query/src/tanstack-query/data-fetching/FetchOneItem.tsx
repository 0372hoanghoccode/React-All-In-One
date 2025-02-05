import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

//fetch chi tiết 1 post theo ID
const fetchPostById = async (postId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return response.data;
};

const FetchOneItem: React.FC = () => {
  //quản lý ID hiện tại
  const [postId, setPostId] = useState<number>(1);
  
  // Fetch dữ liệu với điều kiện và key phụ thuộc vào postId
  const { data, isLoading, error } = useQuery({
    queryKey: ['post', postId], // Key thay đổi theo postId
    queryFn: () => fetchPostById(postId), // Fetch post theo ID
    enabled: !!postId // Chỉ fetch khi có postId
  });

  return (
    <div>
      <h3>Fetch One Item</h3>
      {/* Input điều khiển ID */}
      <input
        type="number"
        value={postId}
        onChange={(e) => setPostId(Number(e.target.value))}
        min={1}
        style={{ marginBottom: '10px' }}
      />
      
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

export default FetchOneItem;