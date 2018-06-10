import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import {Leaderboard} from "../../models/leaderboard";

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

    leaderboard: Leaderboard;
    chosenActivityType;
    activityTypes;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public activityProvider: ActivityProvider
    ) {
        this.activityTypes = activityProvider.getAllActivityTypes();
        this.getLeaderboard(1);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LeaderboardPage');
    }

    public getLeaderboard(activityTypeId: number)
    {
        this.activityProvider.getLeaderboard(activityTypeId).subscribe(
            data => {this.leaderboard = data;console.log(this.leaderboard)},
            err => console.log(err)
        );

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
