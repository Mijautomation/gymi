import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { Activity } from '../../models/activity';
import { ActivityProvider } from '../../providers/activity/activity';

/**
 * Generated class for the ProgressionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-progression',
    templateUrl: 'progression.html',
})
export class ProgressionPage {

    dateRange: string = "always";
    chosenActivityType;
    activityTypes;

    progressionInfo: Array<Activity>;

    constructor(public activityProvider: ActivityProvider,
                public toastCtrl: ToastController) {
        this.activityTypes = activityProvider.getAllActivityTypes();
    }

    retrieveData(activityType, dateRange: string) {
        if(this.dateRange && this.chosenActivityType) {
            this.activityProvider.getProgression(activityType, dateRange)
                .subscribe((data) => this.progressionInfo = data,
                    (error) => this.handleError(error));
        }
    }

    private handleError(err) {
        console.log(err);
        this.presentToast("Something went wrong with retrieving the data.");
    }

    private presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }
}
