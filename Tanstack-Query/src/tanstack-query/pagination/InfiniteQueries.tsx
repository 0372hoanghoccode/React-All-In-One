import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const allPosts = res.data;
  const perPage = 10;
  const start = (pageParam - 1) * perPage;
  const pagedPosts = allPosts.slice(start, start + perPage);
  
  return {
    posts: pagedPosts,
    nextPage: pagedPosts.length === perPage ? pageParam + 1 : undefined,
    totalPages: Math.ceil(allPosts.length / perPage)
  };
};

const InfiniteQueries: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ['infinitePosts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <div>
      <h3>Infinite Queries Example</h3>
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          <ul>
            {page.posts.map((post: any) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
      <button 
        onClick={() => fetchNextPage()} 
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage 
          ? 'Loading more...' 
          : hasNextPage 
            ? 'Load More' 
            : 'No More Posts'}
      </button>
    </div>
  );
};

export default InfiniteQueries;