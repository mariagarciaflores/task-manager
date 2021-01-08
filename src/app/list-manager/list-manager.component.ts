import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'tm-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css'],
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [
    { title: 'Prepara el ambiente de desarrollo' },
    { title: 'Instalar Angular' },
    { title: 'Crear componentes' },
    { title: 'Añadir estilos' },
    { title: 'Separar funcionalidades' },
    { title: 'Deployar la aplicación' },
  ];

  constructor() {}

  ngOnInit(): void {}

  addItem(title: string): void {
    this.todoList.push({ title });
  }
}
