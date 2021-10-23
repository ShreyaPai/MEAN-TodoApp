import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { CompletedTodoComponent } from './components/completed-todo/completed-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemsComponent,
    AddTodoComponent,
    CompletedTodoComponent,
    EditTodoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
