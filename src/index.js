import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
  return <h1>Timas Todo List</h1>;
}

const SearchPanel = () => {
  return <input placeholder='search'/>;
}

const TodoList = () => {
  const lists = ['Drink Coffee', 'Eat Carrot'];
  return (
    <ul>
      <li>{lists[0]}</li>
      <li>{lists[1]}</li>
    </ul>
  );
}


const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));
