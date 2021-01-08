import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'tm-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css'],
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }

  deleteTask(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }

  updateTask(item: TodoItem, changes: any): void {
    this.todoListService.updateItem(item, changes);
  }
}
