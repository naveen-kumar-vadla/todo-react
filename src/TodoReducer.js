import TodoAPI from './TodoAPI.js';

const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'add-item':
      return TodoAPI.addTodoItem(state, action.value);
    case 'delete-item':
      return TodoAPI.deleteItem(state, action.value);
    case 'update-item-state':
      return TodoAPI.updateItemState(state, action.value);
    case 'update-name':
      return TodoAPI.updateName(state, action.value);
    case 'reset':
      return TodoAPI.resetTodo(state);
    default:
      return state;
  }
};

export default TodoReducer;
