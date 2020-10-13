const getNextState = currentState => {
  if (currentState === 'created') return 'doing';
  if (currentState === 'doing') return 'done';
  if (currentState === 'done') return 'done';
  return currentState;
};

const getNewId = () => new Date().getTime();

const addTodoItem = (oldItems, name, title) => {
  const items = oldItems.slice();
  const id = getNewId();
  items.push({ id, title, state: 'created' });
  return { items, name };
};

const deleteItem = (items, name, id) => ({
  name,
  items: items.filter(item => item.id !== id),
});

const updateItemState = (oldItems, name, id) => {
  const items = oldItems.slice();
  const item = items.find(item => item.id === id);
  item.state = getNextState(item.state);
  return { items, name };
};

const TodoReducer = ({ items, name }, action) => {
  switch (action.type) {
    case 'add-item':
      return addTodoItem(items, name, action.value);
    case 'delete-item':
      return deleteItem(items, name, action.value);
    case 'update-item-state':
      return updateItemState(items, name, action.value);
    case 'update-name':
      return { items, name: action.value };
    case 'reset':
      return action.value;
    default:
      return { items, name };
  }
};

export default TodoReducer;
