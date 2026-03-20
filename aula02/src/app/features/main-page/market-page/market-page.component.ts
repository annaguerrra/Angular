import { Component } from '@angular/core';
import { IMarket, MockMarket } from './Market.mock';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent {
  protected selectedMarket!: IMarket;
  protected isClicked = false;

  protected markets: IMarket[] = []
  constructor(){
    this.markets = MockMarket;
  }

  openModal(mkt: IMarket){
    this.selectedMarket = mkt;
    this.isClicked = true;
  }

  closeModal = () => {
    this.isClicked = false;
  }
}
