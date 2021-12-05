import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public todos: TodoModel[];
  public completedTodos: TodoModel[];

  failureMessage: string;
  displayFailureMessage: boolean;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = [];
    this.getTodos();
    this.getCompletedTodos();
  }

  getCompletedTodos() {
    this.todoService
      .getCompletedTodoList()
      .subscribe(
        (response) =>
          (this.completedTodos = response['todos'].filter((t) => t.checked))
      );
  }

  getTodos(): void {
    this.todoService.getTodoList().subscribe((response) => {
      this.todos = response['todos'].filter((todo) => !todo.checked);
    });
  }

  deleteTodo(todo: TodoModel) {
    this.todos = this.todos.filter((t) => t._id !== todo._id);
    this.todoService.deleteTodo(todo).subscribe(
      (_) => {
        this.getTodos();
        this.getCompletedTodos();
      },
      (error) => {
        this.displayFailureMessage = true;
        this.failureMessage =
          'Unable to Delete right now, try again in sometime.';
      }
    );
  }

  addTodo(todo: TodoModel) {
    this.todoService.addTodo(todo).subscribe(
      (todo) => {
        this.todos.push(todo);
        this.getTodos();
        this.getCompletedTodos();
      },
      (error) => {
        this.displayFailureMessage = true;
        this.failureMessage = 'Unable to Add right now, try again in sometime.';
      }
    );
  }

  editTodo(todo: TodoModel): void {
    this.getTodos();
    this.getCompletedTodos();
  }

  clearAllCompltedTodos() {
    this.todoService.clearCompletedTodos().subscribe((response) => {
      this.completedTodos = response['todos'];
    });
  }
}
