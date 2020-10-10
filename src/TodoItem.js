import React from 'react';

const TodoItem = ({ item, id, onClick }) => {
  const className = `todoItem-${item.state.name}`;
  return (
    <div className={className} onClick={() => onClick(id)}>
      <div className='highlighter'></div>
      <div className='title'>{item.title}</div>
    </div>
  );
};

export default TodoItem;
