import React, { Component } from 'react';

import Input from './Input.js'
import TodoItem from './TodoItem.js'

const items = [
  { title: 'do something', checked: true },
  { title: 'something else', checked: false },
];

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { items, inputValue: '' };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
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
      items.push({ title, checked: false });
      return { items, inputValue: '' };
    });
  }

  createTodoItems() {
    return this.state.items.map((item, i) => (
      <TodoItem item={item} key={i}></TodoItem>
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
