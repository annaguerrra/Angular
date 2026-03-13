import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // MET01. 
  isClick = false;

  // MET02. prefira função a variáveis
  onClick = () => {
    console.log("clicked");
  }
}
