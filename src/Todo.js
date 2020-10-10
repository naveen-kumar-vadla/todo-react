import React, { Component } from 'react';

import Input from './Input.js';
import TodoItem from './TodoItem.js';
import State from './State.js';

const items = [
  { id: 1, title: 'do something', state: State.Done },
  { id: 2, title: 'something else', state: State.Created },
  { id: 3, title: 'complete App', state: State.Doing },
];

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { items, inputValue: '' };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.updateTodoItemState = this.updateTodoItemState.bind(this);
  }

  onChange(inputValue) {
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
        item={item}
        key={item.id}
        onClick={this.updateTodoItemState}
      ></TodoItem>
    ));
  }

  render() {
    console.log(this.state.items);
    return (
      <div className='todo'>
        <h1 className='todo-name'>TODO</h1>
        <div>{this.createTodoItems()}</div>
        <Input
          value={this.state.inputValue}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}

export default Todo;
