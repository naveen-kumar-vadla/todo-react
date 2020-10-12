import React, { Component } from 'react';

import Input from './Input.js';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  toggleEditMode() {
    this.setState(({ isEditing }) => ({ isEditing: !isEditing }));
  }

  updateName(name) {
    this.toggleEditMode();
    this.props.updateName(name);
  }

  resetTodo(event) {
    event.stopPropagation();
    this.props.reset();
  }

  render() {
    const header = (
      <div className='todo-name' onClick={this.toggleEditMode}>
        {this.props.value}
      </div>
    );
    const inputHeader = (
      <Input
        className='todo-name-edit-mode'
        value={this.props.value}
        onEnter={this.updateName}
        autoFocus={true}
      />
    );
    return this.state.isEditing ? inputHeader : header;
  }
}

export default TodoHeader;
