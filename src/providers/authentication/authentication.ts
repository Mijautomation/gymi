import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

    private backend = "http://localhost:8080/authenticate/";

    constructor(public http: HttpClient) {
    }


    public registerAccount(user: User): Observable<Object> {
        return this.http.post(this.backend + "register", user)
    }

    public login(username: string, password: string | undefined) {
        return this.http.post(this.backend + "login", {username: username, password: password});
    }
}
