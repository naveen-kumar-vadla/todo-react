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
        onClick={this.toggleState}
        onMouseEnter={this.toggleMouseHover}
        onMouseLeave={this.toggleMouseHover}
      >
        <span className='highlighter'></span>
        <div className='flex-container'>
          <div className='title'>{this.props.title}</div>
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
