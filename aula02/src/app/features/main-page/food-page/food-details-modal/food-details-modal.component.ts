import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFood } from '../Food.mock';

@Component({
  selector: 'app-food-details-modal',
  templateUrl: './food-details-modal.component.html',
  styleUrls: ['./food-details-modal.component.css']
})
export class FoodDetailsModalComponent {
  
  @Input()
  dishe!: IFood;

  @Output()
  close = new EventEmitter<void>();

  closeModal = () => {
    this.close.emit();
  }
}
