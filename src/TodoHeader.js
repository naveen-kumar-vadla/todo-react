import React, { Component } from 'react';

import Input from './Input.js';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.value, isEditing: false, isHovered: false };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.updateName = this.updateName.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.toggleMouseHover = this.toggleMouseHover.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  toggleMouseHover() {
    this.setState(({ isHovered }) => ({ isHovered: !isHovered }));
  }

  toggleEditMode() {
    this.setState(({ isEditing }) => ({ isEditing: !isEditing }));
  }

  updateName(name) {
    this.setState(_ => ({ name }));
  }

  onKeyDown(key, name) {
    if (name !== '' && key === 'Enter') {
      this.toggleEditMode();
      this.props.updateName(name);
    }
  }

  resetTodo(event) {
    event.stopPropagation();
    this.props.reset();
    this.setState(_ => ({ name: 'TODO' }));
  }

  render() {
    const resetButton = (
      <i className='fas fa-times reset-button' onClick={this.resetTodo}></i>
    );
    const header = (
      <div
        className='flex-container'
        onMouseEnter={this.toggleMouseHover}
        onMouseLeave={this.toggleMouseHover}
      >
        <div className='todo-name' onClick={this.toggleEditMode}>
          {this.state.name}
        </div>
        {this.state.isHovered ? resetButton : ''}
      </div>
    );
    const inputHeader = (
      <Input
        className='todo-name-edit-mode'
        value={this.state.name}
        onChange={this.updateName}
        onKeyDown={this.onKeyDown}
        autoFocus={true}
      />
    );
    return this.state.isEditing ? inputHeader : header;
  }
}

export default TodoHeader;
