import React, { useState, useEffect } from 'react';

// đn interface cho dữ liệu Post từ API
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const useEffectExample: React.FC = () => {
  // State để lưu danh sách post, trạng thái loading và lỗi nếu có
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // async function trong useEffect để fetch dlieu
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Lỗi mạng, không thể lấy dữ liệu.');
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); //run 1 lần khi component mount

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default useEffectExample;
