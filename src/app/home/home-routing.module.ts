import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { HomeModule } from './home.module';


const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
      HomeModule,
      RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
