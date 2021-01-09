import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'tm-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css'],
})
export class InputButtonComponent implements OnInit {
  @ViewChild('inputId') input: ElementRef;
  @Input() item: TodoItem;
  @Output() save: EventEmitter<string> = new EventEmitter();
  title = '';

  constructor() {}

  ngOnInit(): void {
    this.title = this.item.title;
  }

  saveValue(newTitle: string): void {
    this.save.emit(newTitle);
    this.input.nativeElement.value = '';
  }
}
