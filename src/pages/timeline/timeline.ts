import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-timeline',
    templateUrl: 'timeline.html',
})
export class TimelinePage {

    constructor(public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TimelinePage');
    }

    /**
     * TODO: Implement fetch from API
     * @param refresher
     */
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }

}





