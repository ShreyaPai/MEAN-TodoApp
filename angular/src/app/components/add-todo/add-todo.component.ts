import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Output() editTodo: EventEmitter<any> = new EventEmitter();
  @Input() updatedTodo: TodoModel;
  @Input() isEditing: boolean;
  btnName: string;
  constructor() {}

  ngOnInit(): void {
    this.title = this.isEditing ? this.updatedTodo.title : this.title
    console.log(this.title);
    console.log(this.updatedTodo.title);
  }

  onSubmit() {
    console.log('Submitted');
    this.isTodoEmpty = false;
    const todo = {
      title: this.title,
      checked: false,
    };
    if (todo.title) {
      if (!this.isEditing) {
        if (todo.title) {
          this.addTodo.emit(todo);
          this.title = '';
        }
      } else {
        todo['_id'] = this.updatedTodo._id;
        if (todo.title) {
          this.editTodo.emit(todo);
        }
      }
    } else {
      this.isTodoEmpty = true;
      this.todoEmptyMessage = 'Nothing to Add';
    }
  }
}
