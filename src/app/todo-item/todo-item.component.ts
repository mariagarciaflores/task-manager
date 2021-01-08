import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'tm-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() delete: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteItem(): void {
    this.delete.emit(this.item);
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed },
    });
  }
}
