import { Component, ViewChild } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { Activity } from '../../models/activity';
import { ActivityProvider } from '../../providers/activity/activity';
import { Chart } from 'chart.js';
import * as moment from 'moment';


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

    activityName: String = "No workout chosen";
    dataArray: Array<number> = [];
    labelArray: Array<string> = [];


    @ViewChild('lineCanvas') lineCanvas;
    lineChart;

    constructor(public activityProvider: ActivityProvider,
                public toastCtrl: ToastController) {
        this.activityTypes = activityProvider.getAllActivityTypes();
    }

    retrieveData(activityType, dateRange: string) {
        if(this.dateRange && this.chosenActivityType) {
            this.activityProvider.getProgression(activityType, dateRange)
                .subscribe((data) => {
                    this.progressionInfo = data;
                    this.updateChart(this.progressionInfo)},
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

    ionViewDidLoad() {
        this.createChart();
    }


    createChart() {
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {

            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: this.activityName,
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }

    private updateChart(progressionInfo: Array<Activity>) {
        this.labelArray = [];
        this.dataArray = [];
        for(let activity of progressionInfo) {
            this.activityName = activity.activityType.name;
            this.dataArray.push(parseInt(activity.amount));
            this.labelArray.push(moment(activity.dateTime).format('MMM Do'));
        }

        this.addData(this.lineChart, this.labelArray, this.dataArray, this.activityName);
    }

    private addData(chart, label, data, dataLabel) {

        chart.data.labels = label;
        chart.data.datasets[0].data = data;
        chart.data.datasets[0].label = dataLabel;
        chart.update();
    }

}
