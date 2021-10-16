const express = require('express');

const router = express.Router();

const todoController = require('../controllers/todo');
router.post('/addTodo', todoController.addTodo);
router.get('/getTodos', todoController.getTodos);

module.exports = router;