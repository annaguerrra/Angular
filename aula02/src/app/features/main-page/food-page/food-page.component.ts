import { Component } from '@angular/core';
import MockFood, { IFood } from './Food.mock';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  protected dishes: IFood[] = [];
  protected focusedFood?: IFood;

  constructor(){
    this.dishes = MockFood;
  }
  
  onCardClick = (item: IFood) => {
    this.focusedFood = item;
  }

  save = () => {
    alert('Order added to cart');
  }
}

