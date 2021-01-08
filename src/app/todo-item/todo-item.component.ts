import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'tm-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() delete: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  isEditMode = false;

  constructor(private todoListService: TodoListService) {}

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

  editItem(): void {
    this.isEditMode = true;
  }

  updateTask(title: string): void {
    this.todoListService.updateItem(this.item, { title });
  }
}
