import React from 'react';
import WithoutTanstackQuery from './tanstack-query/basic/WithoutTanstackQuery';
import WithTanstackQuery from './tanstack-query/basic/WithTanstackQuery';
import RaceCondition from './tanstack-query/advanced/RaceCondition';
import Deduplication from './tanstack-query/advanced/Deduplication';
import FetchOneItem from './tanstack-query/data-fetching/FetchOneItem';
import FetchFromMultipleEndpoints from './tanstack-query/data-fetching/FetchFromMultipleEndpoints';
import StaleTimeExample from './tanstack-query/advanced/StaleTime';
import RefetchIntervalExample from './tanstack-query/advanced/RefetchInterval';
import MutatingData from './tanstack-query/mutations/MutatingData';
import Pagination from './tanstack-query/pagination/Pagination';
import InfiniteQueries from './tanstack-query/pagination/InfiniteQueries';

const App: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>TanStack Query Demo</h1>
      <hr />

      <h2>1. WithoutTanstackQuery</h2>
      <WithoutTanstackQuery />
      <hr />

      <h2>2. WithTanstackQuery</h2>
      <WithTanstackQuery />
      <hr />

      <h2>3. Race Condition</h2>
      <RaceCondition />
      <hr />

      <h2>4. Deduplication</h2>
      <Deduplication />
      <hr />

      <h2>5. Fetch One Item</h2>
      <FetchOneItem />
      <hr />

      <h2>6. Fetch From Multiple Endpoints</h2>
      <FetchFromMultipleEndpoints />
      <hr />

      <h2>7. Stale Time</h2>
      <StaleTimeExample />
      <hr />

      <h2>8. Refetch Interval</h2>
      <RefetchIntervalExample />
      <hr />

      <h2>9. Mutating Data</h2>
      <MutatingData />
      <hr />

      <h2>10. Pagination</h2>
      <Pagination />
      <hr />

      <h2>11. Infinite Queries</h2>
      <InfiniteQueries />
    </div>
  );
};

export default App;