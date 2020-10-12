import React, { useState } from 'react';

const TodoItem = props => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`todoItem-${props.state.name}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className='highlighter'></span>
      <div className='flex-container'>
        <div className='title' onClick={() => props.onClick(props.id)}>
          {props.title}
        </div>
        {isHovered ? (
          <i
            className='fas fa-times'
            onClick={() => props.deleteItem(props.id)}
          ></i>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
