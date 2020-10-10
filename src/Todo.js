import React, { Component } from 'react';

const Input = ({ value, onChange }) => {
  return (
    <input
      type='text'
      value={value}
      onChange={event => onChange(event.target.value)}
    ></input>
  );
};

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], inputValue: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(inputValue) {
    this.setState(_ => ({ inputValue }));
  }

  render() {
    return (
      <div className='todo'>
        <h1 className='todo-name'>TODO</h1>
        <Input value={this.inputValue} onChange={this.onChange} />
      </div>
    );
  }
}

export default Todo;
