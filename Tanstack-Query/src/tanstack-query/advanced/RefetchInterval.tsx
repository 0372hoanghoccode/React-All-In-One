import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

//fetch post ngẫu nhiên
const fetchRandomPost = async () => {
  // Lấy một bài post ngẫu nhiên (sử dụng post ID ngẫu nhiên từ 1 đến 100)
  const randomId = Math.floor(Math.random() * 100) + 1;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${randomId}`);
  return res.data;
};

const RefetchIntervalExample: React.FC = () => {
  // Sử dụng useQuery với refetch tự động
  const { data, isLoading } = useQuery({
    queryKey: ['randomPost'], // Key cho query
    queryFn: fetchRandomPost, // Hàm fetch post ngẫu nhiên
    refetchInterval: 5000, // Refetch mỗi 5 giây
  });

  return (
    <div>
      <h3>Refetch Interval Example</h3>
      {/* trạng thái loading/success */}
      {isLoading ? (
        <p>Loading random post...</p>
      ) : (
        <div>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
          <p>(Dữ liệu tự động cập nhật sau mỗi 5 giây)</p>
        </div>
      )}
    </div>
  );
};

export default RefetchIntervalExample;