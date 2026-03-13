import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  
  @Output()
  Show: EventEmitter<string> = new EventEmitter();

  @Input()
  label: string = "";

  showMessage = () => {
    this.Show.emit();
  }
}
