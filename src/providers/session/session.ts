import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
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
