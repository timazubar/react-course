import React, { Component } from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {
  render() {
     return (
    <div className="d-flex add-item-group">
      <input
      className='form-control new-item-input' 
      placeholder='Add new item...'/>
      <button 
          type="button"
          className="btn btn-outline-primary"
          onClick={() => this.props.onItemAdded('Hello') }>Add</button>
    </div>
  )
  }
}



  // const TodoList = ({todos}) => {
  //   const elements = todos.map((item) => {
  //     const { id, ...itemProps } = item;
      
  //     return (
  //       <li className = "list-group-item">
  //         <TodoListItem {...itemProps} />
  //       </li>)
  //   })
  //   return (
  //     <ul className = "list-group todo-list">
  //       {elements}
  //     </ul>
  //   );
  // };