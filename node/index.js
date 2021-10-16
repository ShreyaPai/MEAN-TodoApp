const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todoRoute = require("./routes/todo");

const app = express();
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });
  app.use("/rest/todo", todoRoute);


  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  

const MONGO_DB_URI =
  "mongodb+srv://root:root@cluster0.lp5zl.mongodb.net/todolist";

mongoose
  .connect(MONGO_DB_URI)
  .then((res) => {
    app.listen(8080);
    console.log("Connected to DB!!");
  })
  .catch((err) => console.log("err >> ", err));
