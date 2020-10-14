import React from 'react';

import TodoItem from './TodoItem.js';
import withDelete from './withDelete.js';

const TodoItems = ({ items, updateMethod, deleteMethod }) => {
  return items.map(item => {
    const DeletableTodoItem = withDelete(TodoItem);
    return (
      <DeletableTodoItem
        {...item}
        deleteMethod={deleteMethod}
        key={item.id}
        updateState={updateMethod}
      />
    );
  });
};

export default TodoItems;
