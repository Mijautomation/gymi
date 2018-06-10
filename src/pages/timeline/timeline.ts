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
    isLoading: boolean = false;
    noMoreData: boolean = false;

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
           this.noMoreData = true;
        }
        else {
            this.timelineList = this.timelineList.concat(data);
            this.noMoreData = false;
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
        this.isLoading = true;
        console.log('Begin async operation');
        this.retrieveTimelineItems(this.timelineList.length, this.timelineList.length + 10);
        setTimeout(() => {
            this.isLoading = false;
            infiniteScroll.complete();
        }, 2000);
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.timelineList = [];
        this.retrieveTimelineItems(0, 10);
        setTimeout(() => {
            refresher.complete();
        }, 2000);
    }
}





