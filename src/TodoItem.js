import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const className = `todoItem-${this.props.state.name}`;
    return (
      <div className={className} onClick={() => this.props.onClick(this.props.id)}>
        <div className='highlighter'></div>
        <div className='title'>{this.props.title}</div>
      </div>
    );
  }
}

export default TodoItem;
