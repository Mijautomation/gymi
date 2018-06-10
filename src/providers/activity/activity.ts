import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../../models/activity';
import { Session } from '../../models/session';
import { Timeline } from '../../models/timeline';

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

    public getAllActivityTypes() {
        return this.http.get(this.backend + "type/all");
    }

    public getAllSessionsForUser() {
        return this.http.get(this.backend + "session");
    }

    public getSession(id: number) {
        return this.http.get<Session>(this.backend + "session/" + id);
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

    public getTimeline(firstIndex: number, lastIndex: number) {
        return this.http.get<Array<Timeline>>(this.backend + "timeline/" + firstIndex + "/" + lastIndex);
    }

    getProgression(activityType, dateRange: string) {
        return this.http.get<Array<Activity>>(this.backend + "progress/"+ activityType.id + "/" + dateRange);
    }
}
