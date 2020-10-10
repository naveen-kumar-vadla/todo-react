import React from 'react';

const TodoItem = ({ item, id, onClick }) => {
  const { title, checked } = item;
  return (
    <div
      className={checked ? 'todoItem-completed' : 'todoItem-notCompleted'}
      onClick={() => onClick(id)}
    >
      <div className='highlighter'></div>
      <div className='title'>{title}</div>
    </div>
  );
};

export default TodoItem;
