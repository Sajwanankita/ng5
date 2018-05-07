import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; //for sharing service data to the components

@Injectable()
export class DataService {

  private todoList=new BehaviorSubject<any>([]);
  todo = this.todoList.asObservable();
  constructor() { }

  changeTodo(todo){
    this.todoList.next(todo);
  }

}
