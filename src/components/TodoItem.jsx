import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../store/todoSlice';

function TodoItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
        className="checkbox"
      />
      <span className="todo-text">{task.text}</span>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="delete-btn"
      >
        Удалить
      </button>
    </div>
  );
}

export default TodoItem;