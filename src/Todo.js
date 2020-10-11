import React, { Component } from 'react';

import Input from './Input.js';
import TodoHeader from './TodoHeader.js';
import TodoItem from './TodoItem.js';
import State from './State.js';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'TODO', items: [], inputValue: '' };
    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.updateTodoItemState = this.updateTodoItemState.bind(this);
    this.updateName = this.updateName.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState(_ => ({ name: 'TODO', items: [], inputValue: '' }));
  }

  onInputValueChange(inputValue) {
    this.setState(_ => ({ inputValue }));
  }

  onKeyDown(key, inputValue) {
    if (inputValue !== '' && key === 'Enter') this.addTodoItem(inputValue);
  }

  addTodoItem(title) {
    this.setState(state => {
      const items = state.items.slice();
      const id = items.length + 1;
      items.push({ id, title, state: State.Created });
      return { items, inputValue: '' };
    });
  }

  updateName(name) {
    this.setState(_ => ({ name }));
  }

  deleteItem(id) {
    this.setState(({ items }) => ({
      items: items.filter(item => item.id !== id),
    }));
  }

  updateTodoItemState(id) {
    this.setState(state => {
      const items = state.items.slice();
      const index = items.findIndex(item => item.id === id);
      const item = Object.assign({}, items[index]);
      item.state = item.state.next;
      items[index] = item;
      return { items };
    });
  }

  createTodoItems() {
    return this.state.items.map(item => (
      <TodoItem
        state={item.state}
        title={item.title}
        id={item.id}
        key={item.id}
        onClick={this.updateTodoItemState}
        deleteItem={this.deleteItem}
      />
    ));
  }

  render() {
    return (
      <div className='todo'>
        <TodoHeader
          value={this.state.name}
          updateName={this.updateName}
          reset={this.reset}
        />
        <div>{this.createTodoItems()}</div>
        <Input
          value={this.state.inputValue}
          onChange={this.onInputValueChange}
          onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}

export default Todo;
