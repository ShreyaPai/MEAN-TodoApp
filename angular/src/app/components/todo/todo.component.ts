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
  failureMessage: string;
  displayFailureMessage: boolean;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = [];
    this.todoService.getTodoList().subscribe((response) => {
      this.todos = response['todos'].filter((todo) => !todo.checked);
    });
  }

  deleteTodo(todo : TodoModel) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe((_) => {
    }, error => {
      this.displayFailureMessage = true;
      this.failureMessage = 'Unable to Delete right now, try again in sometime.'
    });
  }

  addTodo(todo : TodoModel) {
    let todoCount = todo.id;
    this.todoService.addTodo(todo).subscribe(todo => {
      todo.id = todoCount;
      this.todos.push(todo);
    }, error => {
      this.displayFailureMessage = true;
      this.failureMessage = 'Unable to Add right now, try again in sometime.'
    })
  }
}
