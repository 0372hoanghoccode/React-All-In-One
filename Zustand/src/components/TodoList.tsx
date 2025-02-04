import React from 'react';
import { useTodoStore, Todo } from '../stores/todoStore';

const TodoList: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  if (todos.length === 0) {
    return <p>Không có công việc nào.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo: Todo) => (
        <li key={todo.id} style={{ marginBottom: '0.5rem' }}>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              cursor: 'pointer',
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginRight: '1rem'
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>Xóa</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
