import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'tm-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css'],
})
export class InputButtonComponent implements OnInit {
  @ViewChild('inputId') input: ElementRef;
  @Output() save: EventEmitter<string> = new EventEmitter();
  title = '';

  constructor() {}

  ngOnInit(): void {}

  saveValue(newTitle: string): void {
    this.save.emit(newTitle);
    this.input.nativeElement.value = '';
  }
}
