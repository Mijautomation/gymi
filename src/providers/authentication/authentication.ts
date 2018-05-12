import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { SessionProvider } from '../session/session';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

    private backend = "http://localhost:8080/authenticate/";

    constructor(public http: HttpClient, public session: SessionProvider) {
    }


    public registerAccount(user: User) {
        return this.http.post(this.backend + "register", user, {observe: 'response', responseType: 'text'});
    }

    public login(username: string, password: string | undefined) {
        return this.http.post(this.backend + "login", {username: username, password: password}, {observe: 'response', responseType: 'text'});
    }
}
