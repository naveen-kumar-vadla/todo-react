const getNextState = currentState => {
  if (currentState === 'created') return 'doing';
  if (currentState === 'doing') return 'done';
  if (currentState === 'done') return 'done';
  return currentState;
};

const getNewId = () => new Date().getTime();

const TodoAPI = {};

TodoAPI.addTodoItem = (state, title) => {
  const items = state.items.slice();
  const id = getNewId();
  items.push({ id, title, state: 'created' });
  return { ...state, items };
};

TodoAPI.deleteItem = (state, id) => ({
  ...state,
  items: state.items.filter(item => item.id !== id),
});

TodoAPI.updateItemState = (state, id) => {
  const items = state.items.slice();
  const item = items.find(item => item.id === id);
  item.state = getNextState(item.state);
  return { ...state, items };
};

TodoAPI.updateName = (state, name) => ({ ...state, name });
TodoAPI.resetTodo = () => ({ id: 0, items: [], name: 'TODO' });
TodoAPI.fetchTodo = id => ({ id, items: [], name: 'TODO' });

export default TodoAPI;
