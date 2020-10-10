import React, { Component } from 'react';

const Input = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      type='text'
      value={value}
      onChange={event => onChange(event.target.value)}
      onKeyDown={event => onKeyDown(event.key, event.target.value)}
    ></input>
  );
};

const TodoItem = ({ title, checked }) => {
  return (
    <div className={checked ? 'todoItem-completed' : 'todoItem-notCompleted'}>
      <div className='highlighter'>{checked}</div>
      <div className='title'>{title}</div>
    </div>
  );
};

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { title: 'do something', checked: true },
        { title: 'something else', checked: false },
      ],
      inputValue: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(inputValue) {
    this.setState(_ => ({ inputValue }));
  }

  onKeyDown(key, inputValue) {
    if (key === 'Enter') this.addTodoItem(inputValue);
  }

  addTodoItem(title) {
    this.setState(state => {
      const items = state.items.slice();
      items.push({ title, checked: false });
      return { items, inputValue: '' };
    });
  }

  render() {
    const todoItems = this.state.items.map((item, i) => (
      <TodoItem title={item.title} checked={item.checked} key={i}></TodoItem>
    ));
    return (
      <div className='todo'>
        <h1 className='todo-name'>TODO</h1>
        <div>{todoItems}</div>
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
