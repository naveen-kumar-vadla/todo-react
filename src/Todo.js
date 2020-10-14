import React, { useState, useEffect } from 'react';

import TodoHeader from './TodoHeader.js';
import TodoItem from './TodoItem.js';
import Input from './Input.js';
import withDelete from './withDelete.js';
import TodoAPI from './TodoAPI.js';

const Todo = () => {
  const [state, setState] = useState({ items: [], title: 'TODO' });
  useEffect(() => {
    TodoAPI.fetchTodo(0).then(s => setState(s));
  }, []);
  const addItem = title => TodoAPI.addTodoItem(title).then(s => setState(s));
  const updateItemState = id => TodoAPI.updateItemState(id).then(s => setState(s));
  const deleteItem = id => TodoAPI.deleteItem(id).then(s => setState(s));
  const updateName = name => TodoAPI.updateName(name).then(s => setState(s));
  const reset = () => TodoAPI.resetTodo().then(s => setState(s));
  const createItems = () => {
    return state.items.map(item => {
      const DeletableTodoItem = withDelete(TodoItem);
      return (
        <DeletableTodoItem
          {...item}
          deleteMethod={deleteItem}
          key={item.id}
          onClick={updateItemState}
        />
      );
    });
  };
  const DeletableTodoHeader = withDelete(TodoHeader);
  return (
    <div className='todo'>
      <DeletableTodoHeader
        value={state.name}
        updateName={updateName}
        deleteMethod={reset}
      />
      {createItems()}
      <Input className='todo-item-adder' onEnter={addItem} value='' />
    </div>
  );
};

export default Todo;
