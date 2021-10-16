const express = require('express');

const router = express.Router();

const todoController = require('../controllers/todo');
router.post('/addTodo', todoController.addTodo);
router.get('/getTodos', todoController.getTodos);
router.put('/isComplete/:todoId', todoController.isComplete);
router.delete('/removeTodo/:todoId', todoController.removeTodo);

module.exports = router;