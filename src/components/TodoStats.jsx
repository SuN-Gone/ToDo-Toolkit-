import React from 'react';
import { useSelector } from 'react-redux';

function TodoStats() {
  const tasks = useSelector(state => state.todos.tasks);
  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="stats">
      Всего задач: {tasks.length} | 
      Выполнено: {completedCount}
    </div>
  );
}

export default TodoStats;