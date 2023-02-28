import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  @Output() onAddTodo : EventEmitter<Todo> = new EventEmitter();
  
  title:string ="";
  description:string = "";
  onSubmit(){
    this.onAddTodo.emit(new Todo(this.title,this.description));  
  }
}
