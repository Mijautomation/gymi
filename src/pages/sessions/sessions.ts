import { Component } from '@angular/core';
import {
    AlertController,
    IonicPage,
    ModalController,
    NavController,
    ToastController,
    ViewController
} from 'ionic-angular';
import { Activity } from '../../models/activity';
import { Session } from '../../models/session';
import { ActivityProvider } from '../../providers/activity/activity';


@IonicPage()
@Component({
    selector: 'page-sessions',
    templateUrl: 'sessions.html',
})
export class SessionsPage {

    public userSessions: Object;
    public isShowingActivities: number;

    constructor(public activityProvider: ActivityProvider,
                private toastCtrl: ToastController,
                private nav: NavController,
                private modalController: ModalController) {
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
            .subscribe((sessions) => this.userSessions = sessions, err => this.handleError(err));
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
        if(this.isShowingActivities != id) {
            this.isShowingActivities = id;
        }
        else {
            this.isShowingActivities = 0;
        }
    }

    openActivityManagement() {
        let modal = this.modalController.create(ModalAddActivityPage);
        modal.present();
    }
}


@Component({
    selector: 'model-add-activity',
    templateUrl: 'model-add-activity.html',
})
export class ModalAddActivityPage {
    public activityTypes$;
    public session: Session;
    public activies: Array<Activity> = [];
    constructor(
                public activityProvider: ActivityProvider,
                public viewCtrl: ViewController,
                public alertCtrl: AlertController) {
        this.activityTypes$ = activityProvider.getAllActivities();
        activityProvider.createEmptySession()
            .subscribe((data) => {
                this.session = data;
                this.activies.push(new Activity(this.session.id))
            });
        console.log(this.activies);
    }

    public dismiss() {
        let confirm = this.alertCtrl.create({
            title: 'Are you sure you want to stop creating a session?',
            message: 'Your gym session will be canceled',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.activityProvider.deleteSession(this.session.id);
                        this.viewCtrl.dismiss();
                    }
                }
            ]
        });
        confirm.present();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ActivityManagementPage');
    }

    addAnotherActivity() {
        this.activies.push(new Activity(this.session.id));
    }

    saveActivities() {
        this.activityProvider.saveActivities(this.activies)
            .subscribe((data) => {
                this.viewCtrl.dismiss();
            });
    }

    areActivitiesValid() {
        let isValid = true;
        for(let activity of this.activies) {
            if(isValid) {
                if(!activity.sessionTimes || !activity.amount || !activity.activityType) {
                    isValid = false;
                }
            }
        }
        return isValid;
    }
}