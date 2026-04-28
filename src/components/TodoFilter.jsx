import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/todoSlice';

function TodoFilter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.todos.filter);

  const filters = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Выполненные' },
  ];

  return (
    <div className="filter-group">
      {filters.map(filter => (
        <button
          key={filter.value}
          onClick={() => dispatch(setFilter(filter.value))}
          className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;