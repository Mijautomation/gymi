import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActivityProvider {

    constructor(public http: HttpClient) {
        console.log('Hello ActivityProvider Provider');
    }

    public getAllActivities() {
        return [{
            "id": 1,
            "name": "blaat1"
        },
            {
                "id": 2,
                "name": "blaat2"
            },
            {
                "id": 3,
                "name": "blaat3"
            }
        ]
    }

}
