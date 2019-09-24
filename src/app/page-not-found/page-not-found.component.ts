import { Component } from '@angular/core';
import { AuthenticationService } from '../services/AuthenticationService';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
    public blabla: number = 1;

    constructor(public authenticationService: AuthenticationService) {

    }
}
