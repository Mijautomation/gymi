import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

    dateRange: string;
    activity: Activity;
    activityTypes;

    constructor(public activityProvider: ActivityProvider) {
        this.activityTypes = activityProvider.getAllActivityTypes();
    }

}
