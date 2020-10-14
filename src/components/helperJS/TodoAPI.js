import { fetchPostMethod, fetchGetMethod } from './request.js';

const TodoAPI = {};
TodoAPI.addTodoItem = title => fetchPostMethod('/api/addTodoItem', { title });
TodoAPI.deleteItem = id => fetchPostMethod('/api/deleteItem', { id });
TodoAPI.updateItemState = id => fetchPostMethod('/api/updateItemState', { id });
TodoAPI.updateName = name => fetchPostMethod('/api/updateName', { name });
TodoAPI.resetTodo = () => fetchPostMethod('/api/resetTodo');
TodoAPI.fetchTodo = id => fetchGetMethod(`/api/fetchTodo/${id}`);

export default TodoAPI;
