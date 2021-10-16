import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: TodoModel;
  @Output() deleteTodo: EventEmitter<TodoModel> = new EventEmitter();
  displayFailureMessage: boolean;
  failureMessage: string;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  setClass() {
    let classes = {
      todo: true,
      'is-complete': this.todo.checked,
    };
    return classes;
  }

  onComplete(todo) {
    todo.check = !todo.check;
    this.todoService.isComplete(todo).subscribe((todo) => {
      console.log(todo);
    }, error => {
      this.displayFailureMessage = true;
      this.failureMessage = 'Unable to Add right now, try again in sometime.'
    });
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
