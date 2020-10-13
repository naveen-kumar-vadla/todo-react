import React from 'react';

const TodoItem = props => {
  const className = `todoItem-${props.state}`;
  return (
    <div className={className} onClick={() => props.onClick(props.id)}>
      <div className='highlighter'></div>
      <div className='title'> {props.title} </div>
    </div>
  );
};

export default TodoItem;
