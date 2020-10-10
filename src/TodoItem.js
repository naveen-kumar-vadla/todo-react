import React from 'react';

const TodoItem = ({ item, onClick }) => {
  const className = `todoItem-${item.state.name}`;
  return (
    <div className={className} onClick={() => onClick(item.id)}>
      <div className='highlighter'></div>
      <div className='title'>{item.title}</div>
    </div>
  );
};

export default TodoItem;
