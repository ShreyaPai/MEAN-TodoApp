import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { CompletedTodoComponent } from './components/completed-todo/completed-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemsComponent,
    AddTodoComponent,
    CompletedTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
