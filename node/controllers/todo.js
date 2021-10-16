const TODO = require("../models/todo");
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
