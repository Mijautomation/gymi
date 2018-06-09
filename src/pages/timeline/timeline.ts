import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Timeline } from '../../models/timeline';
import { ActivityProvider } from '../../providers/activity/activity';

@IonicPage()
@Component({
    selector: 'page-timeline',
    templateUrl: 'timeline.html',
})
export class TimelinePage {

    timelineList: Array<Timeline> = [];


    constructor(public navParams: NavParams,
                public activityProvider: ActivityProvider,
                public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        this.retrieveTimelineItems(0, 10);

    }

    private retrieveTimelineItems(firstIndex: number, lastIndex: number) {
        this.activityProvider.getTimeline(firstIndex, lastIndex)
            .subscribe((data) => {
                    this.handleData(data);
                },
                (error) => {
                    this.handleError(error);
                });
    }

    private handleData(data: Array<Timeline>) {
        if(data.length == 0) {
            this.presentToast("There's no new items available.");
        }
        else {
            this.timelineList = this.timelineList.concat(data);
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

    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.retrieveTimelineItems(this.timelineList.length, this.timelineList.length + 10);
        setTimeout(() => {
            infiniteScroll.complete();
        }, 2000);
    }
}





