import React from 'react';
import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = (endpoint: string) => axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`).then(res => res.data);

const FetchFromMultipleEndpoints: React.FC = () => {
  const endpoints = ['posts', 'users', 'comments'];
  
  const results = useQueries({
    queries: endpoints.map((endpoint) => {
      return {
        queryKey: [endpoint],
        queryFn: () => fetchData(endpoint),
      };
    }),
  });

  return (
    <div>
      <h3>Fetch From Multiple Endpoints</h3>
      {results.map((result, index) => (
        <div key={endpoints[index]}>
          <h4>{endpoints[index].toUpperCase()}</h4>
          {result.isLoading ? (
            <p>Loading...</p>
          ) : result.error ? (
            <p>Error loading {endpoints[index]}</p>
          ) : (
            <pre style={{ maxHeight: '100px', overflow: 'auto' }}>
              {JSON.stringify(result.data.slice(0, 2), null, 2)}
            </pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default FetchFromMultipleEndpoints;
