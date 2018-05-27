import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Activity } from '../../models/activity';
import { Session } from '../../models/session';

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActivityProvider {
    private backend = "http://localhost:8080/activity/";

    constructor(public http: HttpClient) {
    }

    public getAllActivities() {
        return this.http.get(this.backend + "type/all");
    }

    public getAllSessionsForUser() {
        return this.http.get(this.backend + "session");
    }

    createEmptySession() {
        return this.http.post<Session>(this.backend + "session", "");
    }

    deleteSession(id) {
        this.http.delete(this.backend + "session/" + id).subscribe();
    }

    saveActivities(activies: Array<Activity>) {
        return this.http.post(this.backend, activies);
    }
}
