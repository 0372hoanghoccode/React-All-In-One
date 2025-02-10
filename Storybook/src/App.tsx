import React from 'react';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { Card } from './components/Card/Card';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Card title="Demo Components">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Button>Click me</Button>
          <Input placeholder="Enter your name" label="Name" />
        </div>
      </Card>
    </div>
  );
};

export default App;