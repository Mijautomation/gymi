import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../../models/user';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

    public credentialsInvalid$: Observable<boolean>;
    public serverError$: Observable<boolean>;

    private backend = "http://urlHere.com/";

    constructor(public http: HttpClient) {
        this.credentialsInvalid$ = new Subject();
        this.serverError$ = new Subject();
    }

    public getUserInfo(userId: number): Observable<User> {
        return this.http.get<User>(this.backend + "user/" + userId);
    }

    public registerAccount(user: User): Observable<Object> {
        return this.http.post(this.backend, user)
    }

    public login(username: string, password: string | undefined) {
        return this.http.post(this.backend + "login", {username: username, password: password});
    }
}
