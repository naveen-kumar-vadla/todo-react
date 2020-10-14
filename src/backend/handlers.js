const state = { id: 0, items: [], name: 'TODO' };

const getNextState = currentState => {
  if (currentState === 'created') return 'doing';
  if (currentState === 'doing') return 'done';
  if (currentState === 'done') return 'done';
  return currentState;
};

const getNewId = () => new Date().getTime();

const addTodoItem = (req, res) => {
  const { title } = req.body;
  const items = state.items;
  const id = getNewId();
  items.push({ id, title, state: 'created' });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(state));
};

const deleteItem = (req, res) => {
  const { id } = req.body;
  state.items = state.items.filter(item => item.id !== id);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(state));
};

const updateItemState = (req, res) => {
  const { id } = req.body;
  const items = state.items.slice();
  const item = items.find(item => item.id === id);
  item.state = getNextState(item.state);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(state));
};

const fetchTodo = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(state));
};

const updateName = (req, res) => {
  const { name } = req.body;
  state.name = name;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(state));
};

const resetTodo = (req, res) => {
  state.id = 0;
  state.items = [];
  state.name = 'TODO';
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(state));
};

module.exports = {
  fetchTodo,
  addTodoItem,
  deleteItem,
  updateItemState,
  resetTodo,
  updateName,
};
