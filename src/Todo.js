import React, { Component } from 'react';

import TodoHeader from './TodoHeader.js';
import TodoItem from './TodoItem.js';
import State from './State.js';
import Input from './Input.js';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'TODO', items: [] };
    this.addTodoItem = this.addTodoItem.bind(this);
    this.updateTodoItemState = this.updateTodoItemState.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateName = this.updateName.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    const defaultState = { name: 'TODO', items: [] };
    this.setState(_ => defaultState);
  }

  addTodoItem(title) {
    this.setState(state => {
      const items = state.items.slice();
      items.push({ title, state: State.Created });
      return { items };
    });
  }

  updateName(name) {
    this.setState(_ => ({ name }));
  }

  deleteItem(id) {
    this.setState(({ items }) => ({
      items: items.filter((item, index) => index !== id),
    }));
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
    return this.state.items.map((item, id) => (
      <TodoItem
        state={item.state}
        title={item.title}
        id={id}
        key={id}
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
        {this.createTodoItems()}
        <Input onEnter={this.addTodoItem} value=''/>
      </div>
    );
  }
}

export default Todo;
