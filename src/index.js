import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';
import TodoList from './components/todo-list';

import './index.css';

const App = () => {
  const todoData = [ 
    {label: 'Drink Coffee', important: false},
    {label: 'Make TODO App', important: true},
    {label: 'Make Lunch', important: false}
  ];

  return (
    <div className = 'root'>
      <div></div>
      <AppHeader/>
      <div>
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      
      <TodoList todos = {todoData}/>
    </div>
  )
};

ReactDOM.render(<App/>, document.querySelector('#root'));
