import React, { Component } from 'react';

import Input from './Input.js';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.value, isEditing: false };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  toggleEditMode() {
    this.setState(({ isEditing }) => ({ isEditing: !isEditing }));
  }

  onChange(name) {
    this.setState(_ => ({ name }));
  }

  onKeyDown(key, name) {
    if (name !== '' && key === 'Enter') {
      this.props.updateName(name);
      this.toggleEditMode();
    }
  }

  render() {
    const header = (
      <h1 className='todo-name' onClick={this.toggleEditMode}>
        {this.state.name}
      </h1>
    );
    const inputHeader = (
      <Input
        value={this.state.name}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
    return this.state.isEditing ? inputHeader : header;
  }
}

export default TodoHeader;
