import { Component, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-completed-todo',
  templateUrl: './completed-todo.component.html',
  styleUrls: ['./completed-todo.component.css']
})
export class CompletedTodoComponent implements OnInit {
  @Input() public completedTodo: TodoModel;


  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.completedTodo.checked = true;
  }

  setClass() {
    let classes = {
      todo: true,
      'is-complete': this.completedTodo.checked,
    };
    return classes;
  }

}
