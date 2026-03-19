import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { MarketPageComponent } from './features/main-page/market-page/market-page.component';
import { FoodPageComponent } from './features/main-page/food-page/food-page.component';

const routes: Routes = [
  { path: "", component: MainPageComponent, children:[
    { path: "market", component: MarketPageComponent },
    { path: "food", component: FoodPageComponent }
  ]},
  { path: "login", component: LoginPageComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
