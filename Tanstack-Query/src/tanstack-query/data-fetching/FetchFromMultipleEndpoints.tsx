import React from 'react';
import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

//fetch chung cho nhiều endpoint
const fetchData = (endpoint: string) => 
  axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`).then(res => res.data);

const FetchFromMultipleEndpoints: React.FC = () => {
  //dscác endpoint cần fetch
  const endpoints = ['posts', 'users', 'comments'];
  
  // useQueries để fetch nhiều API song song
  // Mỗi query được config riêng với key và function fetch
  const results = useQueries({
    queries: endpoints.map((endpoint) => {
      return {
        queryKey: [endpoint], // Key unique cho mỗi query
        queryFn: () => fetchData(endpoint), // Hàm fetch dữ liệu
      };
    }),
  });

  return (
    <div>
      <h3>Fetch From Multiple Endpoints</h3>
      {/* Render kết quả từng endpoint */}
      {results.map((result, index) => (
        <div key={endpoints[index]}>
          <h4>{endpoints[index].toUpperCase()}</h4>
          {/*trạng thái loading/error/success */}
          {result.isLoading ? (
            <p>Loading...</p>
          ) : result.error ? (
            <p>Error loading {endpoints[index]}</p>
          ) : (
            <pre style={{ maxHeight: '100px', overflow: 'auto' }}>
              {/*hiện 2 item đầu tiên*/}
              {JSON.stringify(result.data.slice(0, 2), null, 2)}
            </pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default FetchFromMultipleEndpoints;
