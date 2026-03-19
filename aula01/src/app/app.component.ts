import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class01';
  count = 0;
  name = "";

  foiClicado = () => {
    this.count++;
  }

  inputValueChanged = (value: string) => {
    this.name = value
  }
  
}
