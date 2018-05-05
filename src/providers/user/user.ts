import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';


@Injectable()
export class UserProvider {

    private backend = "http://urlHere.com/";

    constructor(public http: HttpClient) {
    }

    public getUserInfo(userId: number): Observable<User> {
        return this.http.get<User>(this.backend + "user/" + userId);
    }

}
