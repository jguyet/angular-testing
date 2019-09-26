import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationService } from './services/AuthenticationService';
import { AuthGuard } from './services/auth.guard';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './reducers/counter.reducer';

@NgModule({
  declarations: [
    /** Declaration of your packaging components */
    AppComponent,
    PageNotFoundComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: counterReducer
    })
  ],
  providers: [
    /** Singletons services */
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
