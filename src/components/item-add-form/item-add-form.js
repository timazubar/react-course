import React, { Component } from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {
      
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
  };
  
  render() {

    return (
      <form className="d-flex add-item-group" 
            onSubmit={this.onSubmit}>
        <input
        className='form-control new-item-input'
        onChange={this.onLabelChange}
        placeholder='Add new item...'/>
        <button 
            type="submit"
            className="btn btn-outline-primary">Add</button>
      </form>
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