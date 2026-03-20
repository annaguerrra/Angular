import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMarket } from '../../Market.mock';

@Component({
  selector: 'app-card-market',
  templateUrl: './card-market.component.html',
  styleUrls: ['./card-market.component.css']
})
export class CardMarketComponent {

  @Input()
  market!: IMarket;

  @Output()
  onClick : EventEmitter<void> = new EventEmitter();
}
