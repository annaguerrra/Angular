import { Component } from '@angular/core';
import { IMarket, MockMarket } from './Market.mock';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent {
  protected markets: IMarket[] = []

  constructor(){
    this.markets = MockMarket;
  }
}
