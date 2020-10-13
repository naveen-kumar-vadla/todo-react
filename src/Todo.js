import React, { useState } from 'react';

import TodoHeader from './TodoHeader.js';
import TodoItem from './TodoItem.js';
import State from './State.js';
import Input from './Input.js';
import withDelete from './withDelete.js';

const getNewId = () => new Date().getTime();

const Todo = () => {
  const [name, setName] = useState('TODO');
  const [items, setItems] = useState([]);
  const addItem = title => {
    const itemsCopy = items.slice();
    const id = getNewId();
    itemsCopy.push({ id, title, state: State.Created });
    setItems(itemsCopy);
  };
  const updateItemState = id => {
    const itemsCopy = items.slice();
    const item = itemsCopy.find(item => item.id === id);
    item.state = item.state.next;
    setItems(itemsCopy);
  };
  const deleteItem = id => setItems(items.filter(item => item.id !== id));
  const updateName = name => setName(name);
  const reset = () => {
    setName('TODO');
    setItems([]);
  };
  const createItems = () => {
    return items.map(item => {
      const DeletableTodoItem = withDelete(TodoItem);
      return (
        <DeletableTodoItem
          id={item.id}
          deleteMethod={deleteItem}
          state={item.state}
          title={item.title}
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
        id={0}
        value={name}
        updateName={updateName}
        deleteMethod={reset}
      />
      {createItems()}
      <Input className='todo-item-adder' onEnter={addItem} value='' />
    </div>
  );
};

export default Todo;
