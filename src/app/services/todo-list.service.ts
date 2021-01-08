import { Injectable } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const TODO_LIST_KEY = 'Todo_List';

const TODO_LIST = [
  { title: 'Prepara el ambiente de desarrollo' },
  { title: 'Instalar Angular' },
  { title: 'Crear componentes' },
  { title: 'Añadir estilos' },
  { title: 'Separar funcionalidades' },
  { title: 'Deployar la aplicación' },
];

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList = this.storageService.getData(TODO_LIST_KEY) || TODO_LIST;
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  addItem(item: TodoItem): void {
    this.todoList.push(item);
    this.storageService.setData(TODO_LIST_KEY, this.todoList);
  }

  updateItem(item: TodoItem, changes: any): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.storageService.setData(TODO_LIST_KEY, this.todoList);
  }

  deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.storageService.setData(TODO_LIST_KEY, this.todoList);
  }
}
