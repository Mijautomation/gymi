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
}