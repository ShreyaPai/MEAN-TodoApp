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
  id: number = 1;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Submitted');
    const todo = {
      id: this.id,
      title: this.title,
      checked: false,
    };
    if (todo.title) {
      this.id++;
      this.isTodoEmpty = false;
      this.addTodo.emit(todo);
    } else {
      this.isTodoEmpty = true
      this.todoEmptyMessage = 'Nothing to Add'
    }
  }
}
