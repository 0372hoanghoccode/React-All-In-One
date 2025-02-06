import React from 'react';

export interface DataDisplayProps {
  data: any[];
  renderItem: (item: any) => React.ReactNode;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data, renderItem }) => {
  return (
    <div>
      {data.length === 0 ? <p>Loading...</p> : data.map(renderItem)}
    </div>
  );
};

export default DataDisplay;
