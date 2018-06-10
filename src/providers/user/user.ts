import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import {FriendResponse} from "../../models/friendResponse";
import {Friend} from "../../models/friend";


@Injectable()
export class UserProvider {

    private backend = "http://localhost:8080/";

    constructor(public http: HttpClient) {
    }

    public getUserInfo(userId: number): Observable<User> {
        return this.http.get<User>(this.backend + "user/" + userId);
    }

    public getLoggedInUserInfo(): Observable<User> {
        return this.http.get<User>(this.backend + "user/current");
    }

    public getFriendsForUser(userId: number): Observable<FriendResponse>
    {
        return this.http.get<FriendResponse>(this.backend + "user/" + userId + "/friends");
    }

    public getUserByUsername(username: string): Observable<User>
    {
        return this.http.get<User>(this.backend + 'user/username/' + username);
    }

    public sendFriendRequest(userId1: number, userId2: number): Observable<Friend>
    {
        return this.http.post<Friend>(this.backend + 'user/sendFriendRequest/' + userId1 + '/' + userId2, {});
    }

    public deleteFriendship(userId2: number)
    {
        return this.http.delete(this.backend + 'user/deleteFriendship/' + userId2,{observe: 'response', responseType: 'text'});
    }

}
