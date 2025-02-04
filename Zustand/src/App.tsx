import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <h1 >Todo List with Zustand</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
