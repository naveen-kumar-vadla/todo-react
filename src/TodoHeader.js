import React, { Component } from 'react';

import Input from './Input.js';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.value, isEditing: false, isHovered: false };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onChange(name) {
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
  }

  render() {
    const resetAction = this.state.isHovered ? this.resetTodo : () => {};
    const resetButtonClassName = this.state.isHovered ? 'fas fa-times' : '';
    const header = (
      <div
        className='todo-item-container'
        onClick={this.toggleEditMode}
        onMouseEnter={this.toggleMouseHover}
        onMouseLeave={this.toggleMouseHover}
      >
        <div className='todo-name'> {this.state.name} </div>
        <i className={'icon ' + resetButtonClassName} onClick={resetAction}></i>
      </div>
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
