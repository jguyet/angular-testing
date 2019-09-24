import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public isLoggedIn = false;

    constructor( /** dependencies */ ) {

    }    

    public login() {
        this.isLoggedIn = true;
    }

    public logout() {
        this.isLoggedIn = false;
    }

    public test() {
        return this.isLoggedIn;
    }
}