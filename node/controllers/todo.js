const TODO = require("../models/todo");
const CompltedTODO = require("../models/completed-todo");
const completedTodo = require("../models/completed-todo");
exports.addTodo = async (req, res, next) => {
  const title = req.body.title;
  const checked = req.body.checked;
  try {
    const todo = new TODO({
      title: title,
      checked: checked,
    });
    await todo.save();
    res.status(201).json({
      message: "Added Successfully",
      todo: todo,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await TODO.find();
    if (!todos) {
      const err = new Error("There is nothing to display");
      err.statusCode = 404;
      throw err;
    }
    res.status(200).json({
        message: 'Todos List',
        todos: todos
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.isComplete = async (req, res, next) => {
  let todoId = req.params.todoId;
  try {
    const todo = await TODO.findById(todoId);
    if (!todo) {
      const err = new Error('Not found');
      err.statusCodes = '422';
      throw err;
    }
    // todo.title = req.body.title;
    // todo.checked = req.body.checked;
    if (todo._id.toString() === todoId.toString()) {
      // saving in a new collection
      const completed_todo = new CompltedTODO({
        title: req.body.title,
        checked: req.body.checked,
      });
      await completed_todo.save();
      // updating existing collection
      const updatedTodoList = await TODO.findByIdAndUpdate(todoId, {$set:req.body},{new:true});
      res.status(200).json({
        message: "Complete",
        todo: updatedTodoList,
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

exports.editTodo = async (req, res, next) => {
  const todoId = req.params.todoId;
  try {
    const todo = await TODO.findById(todoId);
    if (!todo) {
      const err = new Error('Not Found');
      err.statusCode = 422;
      throw err;
    }
    if (todoId.toString() === todo._id.toString()) {
      // todo.title = req.body.title;
      // todo.checked = req.body.checked;
      const newTodo = await TODO.findByIdAndUpdate(todoId, {$set:req.body},{new:true});
      res.status(200).json({
        message: 'Edited Title',
        todo: newTodo
      })
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next();
  }
}

exports.removeTodo = async (req, res, next) => {
  let todoId = req.params.todoId;
  try {
    const todo = await TODO.findById(todoId);
    if (!todo) {
      const err = new Error('Not found');
      err.statusCode = '422';
      throw err;
    }
    if (todo._id.toString() === todoId.toString()) {
     await TODO.findByIdAndDelete(todoId);
      res.status(200).json({
        message: 'Deleted',
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

exports.getCompletedTodos = async (req, res, next) => {
  try {
    const todos = await CompltedTODO.find();
    if (!todos) {
      const err = new Error("There is nothing to display");
      err.statusCode = 404;
      throw err;
    }
    res.status(200).json({
        message: 'Todos List',
        todos: todos
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

exports.clearAll = async (req, res, next) => {
  try {
    const todos = await CompltedTODO.deleteMany({});
    res.status(200).json({
      message: 'Cleared All',
      todos: []
    })
  } catch(error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}