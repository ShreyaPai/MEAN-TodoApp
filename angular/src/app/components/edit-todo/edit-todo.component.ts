import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  @Input() displayEditPopup: boolean;
  @Input() todo: TodoModel;
  @Output() closeEditPopup =  new EventEmitter<boolean>();

  isEditing: boolean;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.isEditing = true;
  }
  editTodo(todo: TodoModel) {
    this.todoService.editTodo(todo)
    .pipe(
    finalize(() => this.closePopup()))
    .subscribe(
      (response) => {
        console.log(todo);
      },
      (error) => {
        // this.displayFailureMessage = true;
        // this.failureMessage = 'Unable to Edit right now, try again in sometime.';
      }
    );
  }

  closePopup() {
    this.displayEditPopup = false;
    this.isEditing = false;
    this.closeEditPopup.emit(this.displayEditPopup);
  }
}
