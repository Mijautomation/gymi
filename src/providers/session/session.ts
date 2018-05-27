import { Injectable } from '@angular/core';

/*
 This class is for an app Session, not a Gym Session.
 For gym sessions, the ActivityProvider is used!
*/
@Injectable()
export class SessionProvider {

  private token: string;
  constructor() {

  }

  public setCurrentToken(token: string) {
    this.token = token;
  }

  public getCurrentToken() {
    return this.token;
  }

  public logout() {
    this.setCurrentToken(undefined);
  }
}
