import React, { Component } from 'react';

import Input from './Input.js';
import TodoItem from './TodoItem.js';
import State from './State.js';

const items = [
  { title: 'do something', state: State.Done },
  { title: 'something else', state: State.Created },
  { title: 'complete App', state: State.Doing },
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
      items.push({ title, state: State.Created });
      return { items, inputValue: '' };
    });
  }

  updateTodoItemState(id) {
    this.setState(state => {
      const items = state.items.slice();
      const item = Object.assign({}, items[id]);
      item.state = item.state.next;
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
        onClick={this.updateTodoItemState}
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
