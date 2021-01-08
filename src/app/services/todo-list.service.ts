import { Injectable } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoList: TodoItem[] = [
    { title: 'Prepara el ambiente de desarrollo' },
    { title: 'Instalar Angular' },
    { title: 'Crear componentes' },
    { title: 'Añadir estilos' },
    { title: 'Separar funcionalidades' },
    { title: 'Deployar la aplicación' },
  ];

  constructor() {}

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  addItem(item: TodoItem): void {
    this.todoList.push(item);
  }

  updateItem(item: TodoItem, changes: any): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
  }

  deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }
}
