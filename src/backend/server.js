const express = require('express');
const handlers = require('./handlers');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/api/fetchTodo/:TodoId', handlers.fetchTodo);
app.post('/api/addTodoItem', handlers.addTodoItem);
app.post('/api/updateItemState', handlers.updateItemState);
app.post('/api/deleteItem', handlers.deleteItem);
app.post('/api/updateName', handlers.updateName);
app.post('/api/resetTodo', handlers.resetTodo);

app.listen(7000, () => console.log('listening on 7000 ....'));
