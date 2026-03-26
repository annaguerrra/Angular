import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isSubscribe = false;

  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute
  ){
    // serviços de injeção de dependência
  }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe((params) => {
      this.isSubscribe = params['tab'] == "subscribe";
    })
  }
}
