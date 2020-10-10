import React from 'react';

const TodoItem = ({ item }) => {
  const { title, checked } = item;
  return (
    <div className={checked ? 'todoItem-completed' : 'todoItem-notCompleted'}>
      <div className='highlighter'></div>
      <div className='title'>{title}</div>
    </div>
  );
};

export default TodoItem;
