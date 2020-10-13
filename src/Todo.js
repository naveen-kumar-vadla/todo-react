import React, { useReducer } from 'react';

import TodoHeader from './TodoHeader.js';
import TodoItem from './TodoItem.js';
import Input from './Input.js';
import withDelete from './withDelete.js';
import TodoReducer from './TodoReducer.js';

const initialState = { items: [], name: 'TODO' };

const Todo = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const addItem = title => dispatch({ type: 'add-item', value: title });
  const updateItemState = id =>
    dispatch({ type: 'update-item-state', value: id });
  const deleteItem = id => dispatch({ type: 'delete-item', value: id });
  const updateName = name => dispatch({ type: 'update-name', value: name });
  const reset = () => dispatch({ type: 'reset', value: initialState });
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
