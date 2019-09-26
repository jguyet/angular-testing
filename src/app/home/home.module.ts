import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';


@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
