import React, { useState, useEffect } from 'react';

export interface DataProviderProps {
  render: (data: any[]) => React.ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ render }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Giả lập fetch data bất đồng bộ
    const timer = setTimeout(() => {
      setData([{ id: 1, name: 'Item A' }, { id: 2, name: 'Item B' }]);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <>{render(data)}</>;
};

export default DataProvider;
