import { Component, Input } from '@angular/core';
import { IFood } from '../../Food.mock';

@Component({
  selector: 'app-card-food',
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.css']
})
export class CardFoodComponent {

  @Input()
  dishe!: IFood;
  
}
