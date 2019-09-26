import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth.guard';
import { CounterComponent } from './counter/counter.component';

const getChildrenHomeRouting = () => import("./home/home-routing.module").then(x => x.HomeRoutingModule);

const routes: Routes = [
    { path: 'home', loadChildren: getChildrenHomeRouting, canActivate: [AuthGuard] },
    { path: 'counter', component: CounterComponent, pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
