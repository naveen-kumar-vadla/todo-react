import React, { Component } from 'react';

import TodoHeader from './TodoHeader.js';
import TodoItem from './TodoItem.js';
import State from './State.js';
import Input from './Input.js';
import withDelete from './withDelete.js';

const getNewId = () => new Date().getTime();

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
      const id = getNewId();
      items.push({ id, title, state: State.Created });
      return { items };
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
    return this.state.items.map(item => {
      const DeletableTodoItem = withDelete(TodoItem);
      return (
        <DeletableTodoItem
          id={item.id}
          deleteMethod={this.deleteItem}
          state={item.state}
          title={item.title}
          key={item.id}
          onClick={this.updateTodoItemState}
        />
      );
    });
  }

  render() {
    const DeletableTodoHeader = withDelete(TodoHeader);
    return (
      <div className='todo'>
        <DeletableTodoHeader
          id={0}
          value={this.state.name}
          updateName={this.updateName}
          deleteMethod={this.reset}
        />
        {this.createTodoItems()}
        <Input onEnter={this.addTodoItem} value='' />
      </div>
    );
  }
}

export default Todo;
