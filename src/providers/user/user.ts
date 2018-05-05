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

    private backend = "http://urlHere.com/";

    constructor(public http: HttpClient) {
    }

    public getUserInfo(userId: number): Observable<User> {
        return this.http.get<User>(this.backend + "user/" + userId);
    }

}
