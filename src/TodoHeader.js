import React, { Component } from 'react';

import Input from './Input.js';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, isHovered: false };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.toggleMouseHover = this.toggleMouseHover.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  toggleMouseHover() {
    this.setState(({ isHovered }) => ({ isHovered: !isHovered }));
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
          {this.props.value}
        </div>
        {this.state.isHovered ? resetButton : ''}
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
