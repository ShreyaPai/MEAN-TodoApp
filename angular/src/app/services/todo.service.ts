import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoModel } from '../models/todo.model';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration'

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'https://jsonplaceholder.typicode.com/todos';

   // limit = '';

  constructor(private http: HttpClient) {}

  addTodo(todo: TodoModel) {
    console.log(Configuration.url);
    return this.http.post<TodoModel>('http://localhost:8080/rest/todo/addTodo', todo);
  }

  getTodoList(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>('http://localhost:8080/rest/todo/getTodos');
  }

  isComplete(todo: TodoModel): Observable<any> {
    const url = `${this.url}/${todo.id}`;
    return this.http.put('http://localhost:8080/rest/todo/addTodo', todo);
  }

  deleteTodo(todo: TodoModel): Observable<TodoModel> {
    const url = `${this.url}/${todo.id}`;
    return this.http.delete<TodoModel>('http://localhost:8080/rest/todo/addTodo');
  }
}
