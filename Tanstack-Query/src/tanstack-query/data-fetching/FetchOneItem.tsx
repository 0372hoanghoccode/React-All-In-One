import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPostById = async (postId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return response.data;
};

const FetchOneItem: React.FC = () => {
  const [postId, setPostId] = useState<number>(1);

const { data, isLoading, error } = useQuery<any, Error>({
    queryKey: ['post', postId],
    queryFn: () => fetchPostById(postId),
    enabled: !!postId
  });


  return (
    <div>
      <h3>Fetch One Item</h3>
      <input
        type="number"
        value={postId}
        onChange={(e) => setPostId(Number(e.target.value))}
        min={1}
        style={{ marginBottom: '10px' }}
      />
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
