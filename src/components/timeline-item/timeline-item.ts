import { Component, Input } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Session } from '../../models/session';
import { Timeline } from '../../models/timeline';
import { ActivityProvider } from '../../providers/activity/activity';

/**
 * Generated class for the TimelineItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'timeline-item',
    templateUrl: 'timeline-item.html'
})
export class TimelineItemComponent {

    @Input()
    item: Timeline;

    isShowingSessionDetails: number = 0;
    sessionDetails: Session;
    isLoading: boolean = false;

    constructor(public activityProvider: ActivityProvider,
                public toastCtrl: ToastController) {
    }

    toggleShowSessionDetails(sessionId) {
        if (this.isShowingSessionDetails != sessionId) {
            this.isShowingSessionDetails = sessionId;
            this.getSessionDetails(sessionId);
        }
        else {
            this.isShowingSessionDetails = 0;
            this.sessionDetails = undefined;
        }
    }

    private getSessionDetails(sessionId: any) {
        this.isLoading = true;
        this.activityProvider.getSession(sessionId)
            .subscribe(
                (data) => {
                    this.sessionDetails = data;
                    console.log(this.sessionDetails);
                    this.isLoading = false;
                },
                (error) => this.handleError(error))
    }


    private handleError(err) {
        console.log(err);
        this.isLoading = false;
        this.isShowingSessionDetails = 0;
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
