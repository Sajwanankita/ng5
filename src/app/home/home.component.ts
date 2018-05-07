import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'
import {DataService} from '../data.service'
@Component({
  selector: 'app-home',
  // template: `<p>hello mam</p>`,
  templateUrl: './home.component.html',
  // if both are there then the last will execute
  styleUrls: ['./home.component.scss'],
  // styleUrls: [`p{font-weight:bold}
  //div{color:gray}
  //`]

  animations: [
    // trigger(name_of_the_animation,array )
    trigger('todoList', [
      transition('* => *', [
      query(':enter', style({ opacity: 0 }), { optional: true }),

      // query(':enter', stagger("300ms", [
      //   animate('.6s ease in', keyframes([
      //     style({ opacity: 0, transform: "translateY(-75%)", offset: 0 }),
      //     style({ opacity: .5, transform: "translateY(35px)", offset: .3 }),
      //     style({ opacity: 1, transform: "translateY(0)", offset: 1 })
      //   ]))]), { optional: true }),

      // query(":leave", stagger("300ms", [
      //   animate('.6s ease in', keyframes([
      //     style({ opacity: 1, transform: "translateY(0)", offset: 0 }),
      //     style({ opacity: 0.5, transform: "translateY(35px)", offset: .3 }),
      //     style({ opacity: 1, transform: "translateY(-75%)", offset: 1 })
      //   ]))]), { optional: true })

    ])])]
})
export class HomeComponent implements OnInit {

  totalToDos: number;
  btnText: string = "Add an item"
  newTodo: string = "";
  todoList = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.todo.subscribe(res=>this.todoList=res)
    this._data.changeTodo(this.todoList)
    this.totalToDos = this.todoList.length
  }
  addItem() {
    this.todoList.push(this.newTodo);
    this.newTodo = '';
    this._data.changeTodo(this.todoList)
    this.totalToDos = this.todoList.length;
 
  }
  removeItem(i: number) {
    this.todoList.splice(i, 1);
    this._data.changeTodo(this.todoList)
    this.totalToDos = this.todoList.length;
  }
}
