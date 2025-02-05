import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface NewPost {
  title: string;
  body: string;
  userId: number;
}

const createPost = async (post: NewPost) => {
  const res = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
  return res.data;
};

const MutatingData: React.FC = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      
      queryClient.setQueryData(['posts'], (oldData: any) => {
        if (oldData && 'pages' in oldData) {
          return {
            ...oldData,
            pages: oldData.pages.map((page: { posts: NewPost[] }, index: number) => 
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
    onError: (error) => {
      console.error('Post creation failed:', error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // validate
    if (!title.trim() || !body.trim()) {
      alert('Please fill in both title and body');
      return;
    }

    mutation.mutate({ 
      title, 
      body, 
      userId: 1 
    });
  };

  return (
    <div>
      <h3>Mutating Data Example</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={mutation.isPending}>
          Create Post
        </button>
      </form>
      {mutation.isPending && <p>Creating post...</p>}
      {mutation.isError && <p>Error creating post: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Post created successfully</p>}
    </div>
  );
};

export default MutatingData;