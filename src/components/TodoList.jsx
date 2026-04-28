import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const tasks = useSelector(state => state.todos.tasks);
  const filter = useSelector(state => state.todos.filter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  return (
    <div className="todo-list">
      {filteredTasks.map(task => (
        <TodoItem key={task.id} task={task} />
      ))}
      {filteredTasks.length === 0 && (
        <p className="empty-message">
          {filter === 'all' && 'Список дел пуст'}
          {filter === 'active' && 'Нет активных задач'}
          {filter === 'completed' && 'Нет выполненных задач'}
        </p>
      )}
    </div>
  );
}

export default TodoList;