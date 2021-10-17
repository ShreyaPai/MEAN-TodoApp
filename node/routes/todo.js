const express = require('express');

const router = express.Router();

const todoController = require('../controllers/todo');
router.post('/addTodo', todoController.addTodo);
router.get('/getTodos', todoController.getTodos);
router.put('/isComplete/:todoId', todoController.isComplete);
router.put('/editTodo/:todoId', todoController.editTodo);
router.delete('/removeTodo/:todoId', todoController.removeTodo);
router.get('/getCompletedTodos', todoController.getCompletedTodos);
router.delete('/clearAll', todoController.clearAll);
module.exports = router;