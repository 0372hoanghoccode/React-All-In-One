// src/App.tsx
import React from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1> Redux Toolkit </h1>
      <UserList />
      <hr />
      <PostList />
    </div>
  );
};

export default App;
