import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

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

}
