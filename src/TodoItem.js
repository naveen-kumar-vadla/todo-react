import React from 'react';

const TodoItem = ({ item, id, onClick }) => {
  const { title, status } = item;
  return (
    <div
      className={status ? 'todoItem-done' : 'todoItem-created'}
      onClick={() => onClick(id)}
    >
      <div className='highlighter'></div>
      <div className='title'>{title}</div>
    </div>
  );
};

export default TodoItem;
