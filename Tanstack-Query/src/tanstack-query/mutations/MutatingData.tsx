import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// Interface định nghĩa cấu trúc post mới
interface NewPost {
  title: string;
  body: string;
  userId: number;
}

// Hàm tạo post mới
const createPost = async (post: NewPost) => {
  const res = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
  return res.data;
};

const MutatingData: React.FC = () => {
  // Truy cập query client để quản lý cache
  const queryClient = useQueryClient();
  
  // State quản lý form
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Mutation để tạo post mới
  const mutation = useMutation({
    mutationFn: createPost, // Hàm thực hiện post
    onSuccess: (newPost) => {
      // Invalidate cache để refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      
      // Cập nhật cache (nếu cần)
      queryClient.setQueryData(['posts'], (oldData: any) => {
        // Xử lý cho infinite query
        if (oldData && 'pages' in oldData) {
          return {
            ...oldData,
            pages: oldData.pages.map((page: any, index: number) =>
              index === 0
                ? { ...page, posts: [newPost, ...page.posts] }
                : page
            )
          };
        }
        return oldData;
      });

      // Reset form
      setTitle('');
      setBody('');
    },
    // Xử lý lỗi
    onError: (error) => {
      console.error('Post creation failed:', error);
    }
  });

  // Xử lý submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    if (!title.trim() || !body.trim()) {
      alert('Please fill in both title and body');
      return;
    }

    // Thực hiện mutation
    mutation.mutate({
      title,
      body,
      userId: 1
    });
  };

  return (
    <div>
      <h3>Mutating Data Example</h3>
      {/* Form tạo post mới */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit" disabled={mutation.isPending}>
          Create Post
        </button>
      </form>

      {/* trạng thái mutation */}
      {mutation.isPending && <p>Creating post...</p>}
      {mutation.isError && <p>Error creating post: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Post created successfully</p>}
    </div>
  );
};

export default MutatingData;