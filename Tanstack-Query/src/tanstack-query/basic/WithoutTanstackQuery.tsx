import React, { useEffect, useState } from 'react';
import axios from 'axios';

// cấu trúc Post
interface Post {
  id: number;
  title: string;
}

const WithoutTanstackQuery: React.FC = () => {
  // State quản lý dữ liệu, trạng thái loading, lỗi
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // useEffect để fetch data khi component mount
  useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        // 5 bài post đầu tiên
        setPosts(res.data.slice(0, 5));
        // Tắt tt loading
        setLoading(false);
      })
      .catch((err) => {
        // Xử lý lỗi
        setError(err.message);
        setLoading(false);
      });
  }, []); // Dependency array rỗng = chỉ chạy 1 lần

  // trạng thái loading/error
  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Posts (Without TanStack Query)</h3>
      <ul>
        {/* Render danh sách posts */}
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.id}:</strong> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WithoutTanstackQuery;