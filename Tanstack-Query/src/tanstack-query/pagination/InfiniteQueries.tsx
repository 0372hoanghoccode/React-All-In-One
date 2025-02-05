import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

// Hàm fetch posts với phân trang
const fetchPosts = async ({ pageParam = 1 }) => {
  // Lấy toàn bộ posts
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const allPosts = res.data;
  
  // Tính toán phân trang
  const perPage = 10;
  const start = (pageParam - 1) * perPage;
  const pagedPosts = allPosts.slice(start, start + perPage);

  // Trả về dữ liệu và thông tin phân trang
  return {
    posts: pagedPosts,
    nextPage: pagedPosts.length === perPage ? pageParam + 1 : undefined,
    totalPages: Math.ceil(allPosts.length / perPage)
  };
};

const InfiniteQueries: React.FC = () => {
  // Sử dụng useInfiniteQuery để load more
  const {
    data,
    fetchNextPage,     // Hàm load trang tiếp theo
    hasNextPage,       // Kiểm tra còn trang để load không
    isFetchingNextPage,// Trạng thái đang load thêm
    isLoading,         // Trạng thái load lần đầu
    error,             // Lỗi nếu có
  } = useInfiniteQuery({
    queryKey: ['infinitePosts'],
    queryFn: fetchPosts,
    // Xác định trang tiếp theo
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1, // Trang bắt đầu
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <div>
      <h3>Infinite Queries Example</h3>
      {/* Render từng trang posts */}
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          <ul>
            {page.posts.map((post: any) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
      
      {/* Nút load more */}
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