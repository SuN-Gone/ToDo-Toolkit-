import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/todoSlice';

function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (inputValue.trim()) {
      dispatch(addTask(inputValue.trim()));
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Введите новую задачу..."
        className="task-input"
      />
      <button onClick={handleAddTask} className="add-btn">
        Добавить
      </button>
    </div>
  );
}

export default TodoInput;