import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="todo-container">
          <h2>Мой список дел (Redux Toolkit)</h2>
          <TodoInput />
          <TodoFilter />
          <TodoList />
          <TodoStats />
        </div>
      </div>
    </Provider>
  );
}

export default App;