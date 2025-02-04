import React, { useState } from 'react';
import { useTodoStore } from '../stores/todoStore';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
        style={{ padding: '0.5rem', width: '250px' }}
      />
      <button type="submit" style={{ marginLeft: '0.5rem' }}>Thêm</button>
    </form>
  );
};

export default TodoInput;
