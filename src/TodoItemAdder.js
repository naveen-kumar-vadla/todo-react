import React, { Component } from 'react';

import Input from './Input.js';

class TodoItemAdder extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onInputValueChange(inputValue) {
    this.setState(_ => ({ inputValue }));
  }

  onKeyDown(key, inputValue) {
    if (inputValue !== '' && key === 'Enter') {
      this.onInputValueChange('');
      this.props.addTodoItem(inputValue);
    }
  }

  render() {
    return (
      <Input
        value={this.state.inputValue}
        onChange={this.onInputValueChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default TodoItemAdder;