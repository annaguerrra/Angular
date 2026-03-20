import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFood } from 'src/app/features/main-page/food-page/Food.mock';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

    @Input()
    Title: IFood[] = []

    @Input()
    Confirmation: boolean = false;

    @Input()
    SaveLabel?: string;

    @Output()
    onClose: EventEmitter<void> = new EventEmitter();

    @Output()
    onSave: EventEmitter<void> = new EventEmitter();

    toggleClose = () => {
      this.onClose.emit();
    }
    
    toggleSave = () => {
      this.onSave.emit();
      
    }
}
