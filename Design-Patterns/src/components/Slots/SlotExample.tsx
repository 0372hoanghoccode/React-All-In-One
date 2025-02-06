import React from 'react';

export interface SlotExampleProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

const SlotExample: React.FC<SlotExampleProps> = ({ header, body, footer }) => {
  return (
    <div className="slot-example" style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <div className="header">{header}</div>
      <div className="body">{body}</div>
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
};

export default SlotExample;
