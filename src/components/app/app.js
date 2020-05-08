import React from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';

import './app.css';

const App = () => {
  const todoData = [ 
    {label: 'Drink Coffee', important: false},
    {label: 'Make TODO App', important: true},
    {label: 'Make Lunch', important: false}
  ];

  return (
    <div className = 'todo-app'>
      <AppHeader toDo={3} done={0}/>
      <div className="top-panel">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      
      <TodoList todos = {todoData}/>
    </div>
  )
};

export default App;
