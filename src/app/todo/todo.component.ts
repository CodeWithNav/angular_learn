import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos:Todo[];
  constructor(){
    this.todos=[
     new Todo("title 1","descriptin 1"),
     new Todo("title 2","descriptin 2"),
     new Todo("title 3","descriptin 3"),
    ];
  }

  addTodo(todo:Todo){
    this.todos.push(todo);
  }
}
