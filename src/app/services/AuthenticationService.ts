import { Injectable } from "@angular/core";

/** Injectable provider on all modules of this project */
@Injectable({
    providedIn: 'root'/** Force global singleton */
})
export class AuthenticationService {

    public isLoggedIn = false;

    constructor( /** dependencies (others injectable) */ ) {

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