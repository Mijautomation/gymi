import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ActivityProvider } from '../../providers/activity/activity';

/**
 * Generated class for the SessionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sessions',
    templateUrl: 'sessions.html',
})
export class SessionsPage {

    public userSessions: Object;
    public isShowingActivities: number;

    constructor(public activityProvider: ActivityProvider,
                private toastCtrl: ToastController) {
        this.loadSessions();
    }


    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            this.loadSessions();
            refresher.complete();
        }, 2000);
    }

    private loadSessions() {
        this.activityProvider.getAllSessionsForUser()
            .subscribe((sessions) => this.userSessions = sessions);
    }

    private handleError(err) {
        console.log(err);
        this.presentToast("Something with loading your data went wrong.");
    }

    private presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }

    toggleActivities(id: any) {
        this.isShowingActivities = id;
    }
}
