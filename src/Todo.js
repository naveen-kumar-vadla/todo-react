import React, { Component } from 'react';

import Input from './Input.js';
import TodoItem from './TodoItem.js';

const getNextState = currentState => {
  if (currentState === 'created') return 'doing';
  if (currentState === 'doing') return 'done';
  if (currentState === 'done') return 'created';
  return currentState;
};

const items = [
  { title: 'do something', status: 'done' },
  { title: 'something else', status: 'created' },
  { title: 'complete App', status: 'doing' },
];

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { items, inputValue: '' };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.updateTodoItemStatus = this.updateTodoItemStatus.bind(this);
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
      items.push({ title, status: 'created' });
      return { items, inputValue: '' };
    });
  }

  updateTodoItemStatus(id) {
    this.setState(state => {
      const items = state.items.slice();
      const item = Object.assign({}, items[id]);
      item.status = getNextState(item.status);
      items[id] = item;
      return { items };
    });
  }

  createTodoItems() {
    return this.state.items.map((item, i) => (
      <TodoItem
        item={item}
        key={i}
        id={i}
        onClick={this.updateTodoItemStatus}
      ></TodoItem>
    ));
  }

  render() {
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
