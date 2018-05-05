import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-leaderboard',
    templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LeaderboardPage');
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
