import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  @Input() displayEditPopup: boolean;
  @Input() todo: TodoModel;
  @Output() closeEditPopup =  new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closePopup() {
    this.displayEditPopup = false;
    this.closeEditPopup.emit(this.displayEditPopup);
  }
}
