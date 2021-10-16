import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: string;
  isTodoEmpty: boolean = false;
  todoEmptyMessage = '';
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Submitted');
    const todo = {
      title: this.title,
      checked: false,
    };
    if (todo.title) {
      this.isTodoEmpty = false;
      this.addTodo.emit(todo);
    } else {
      this.isTodoEmpty = true
      this.todoEmptyMessage = 'Nothing to Add'
    }
  }
}
