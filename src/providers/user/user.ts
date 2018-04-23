import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

    constructor(public http: HttpClient) {

    }


    public getUserInfo(): User {
        return new User(1, "Jimmy", "De Graaf", "degraaf@jimmy.com");
    }
}
