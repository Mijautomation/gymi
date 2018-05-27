import { Component } from '@angular/core';
import { AlertController, IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { ActivityProvider } from "../../providers/activity/activity";

/**
 * Generated class for the ActivityManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-activity-management',
    templateUrl: 'activity-management.html',
})
export class ActivityManagementPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalController: ModalController) {

    }

    openAddActivityModal(characterNum) {
        let modal = this.modalController.create(ModalAddActivityPage);
        modal.present();
    }
}

@Component({
    selector: 'model-add-activity',
    templateUrl: 'model-add-activity.html',
})
export class ModalAddActivityPage {
    public activities$;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalController: ModalController,
                public activityProvider: ActivityProvider,
                public viewCtrl: ViewController,
                public alertCtrl: AlertController) {
        this.activities$ = activityProvider.getAllActivities();
    }

    public dismiss() {
        let confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'This data will be discarded.?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Leave',
                    handler: () => {
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

}