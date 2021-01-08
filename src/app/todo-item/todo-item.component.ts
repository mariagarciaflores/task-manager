import { Component, Input, OnInit } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'tm-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  constructor() {}

  ngOnInit(): void {}
}
