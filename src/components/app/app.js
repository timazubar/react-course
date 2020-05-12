import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId = 4;

  state = {
    todoData: [ 
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make TODO App', important: true, id: 2},
      {label: 'Make Lunch', important: false, id: 3}
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];
      return {
        todoData: newArr
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArr
      }
    })
  };

  render() {
     return (
    <div className="todo-app">
      <AppHeader toDo={3} done={0}/>
      <div className="top-panel">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList
        todos={this.state.todoData}
        onDeleted={this.deleteItem}
      />
      <ItemAddForm
        onItemAdded={this.addItem}/>
    </div>
  )
  }
}