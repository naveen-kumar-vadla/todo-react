import React, { useState, useEffect } from 'react';

import TodoHeader from './TodoHeader.js';
import Input from './Input.js';
import withDelete from './helperJS/withDelete.js';
import TodoAPI from './helperJS/TodoAPI.js';
import TodoItems from './TodoItems.js';

const Todo = () => {
  const [state, setState] = useState({ items: [], title: 'TODO' });
  useEffect(() => {
    TodoAPI.fetchTodo(0).then(s => setState(s));
  }, []);
  const addItem = title => TodoAPI.addTodoItem(title).then(setState);
  const updateItemState = id => TodoAPI.updateItemState(id).then(setState);
  const deleteItem = id => TodoAPI.deleteItem(id).then(setState);
  const updateName = name => TodoAPI.updateName(name).then(setState);
  const reset = () => TodoAPI.resetTodo().then(setState);
  const DeletableTodoHeader = withDelete(TodoHeader);
  return (
    <div className='todo'>
      <DeletableTodoHeader
        value={state.name}
        updateName={updateName}
        deleteMethod={reset}
      />
      <TodoItems
        items={state.items}
        deleteMethod={deleteItem}
        updateMethod={updateItemState}
      />
      <Input className='todo-item-adder' onEnter={addItem} value='' />
    </div>
  );
};

export default Todo;
