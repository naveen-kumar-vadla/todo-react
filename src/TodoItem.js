import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.toggleMouseHover = this.toggleMouseHover.bind(this);
    this.delete = this.delete.bind(this);
    this.toggleState = this.toggleState.bind(this);
  }

  toggleMouseHover() {
    this.setState(({ isHovered }) => ({ isHovered: !isHovered }));
  }

  delete(event) {
    event.stopPropagation();
    this.props.deleteItem(this.props.id);
  }

  toggleState() {
    this.props.onClick(this.props.id);
  }

  render() {
    const deleteAction = this.state.isHovered ? this.delete : () => {};
    const deleteButtonClassName = this.state.isHovered ? 'fas fa-times' : '';
    return (
      <div
        className={`todoItem-${this.props.state.name}`}
        onMouseEnter={this.toggleMouseHover}
        onMouseLeave={this.toggleMouseHover}
      >
        <div className='highlighter'></div>
        <div className='todo-item-container'>
          <div className='title' onClick={this.toggleState}>
            {this.props.title}
          </div>
          <i
            className={'icon ' + deleteButtonClassName}
            onClick={deleteAction}
          ></i>
        </div>
      </div>
    );
  }
}

export default TodoItem;
