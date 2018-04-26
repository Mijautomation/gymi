import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { User } from '../../models/user';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

    private backend = "http://localhost.com/";
    constructor(public http: HttpClient) {

    }

    public getUserInfo(userId: number): Observable<User> {
        return this.http.get<User>(this.backend + "user/"+userId);
    }

    public registerAccount(user: User): Observable<Object>{
        return this.http.post("http://urlHere.com/", user)
    }

    public login(username: string, password: string | undefined) {

    }

}
