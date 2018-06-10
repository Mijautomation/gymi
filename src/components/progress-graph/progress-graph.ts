import { Component, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Activity } from '../../models/activity';

@Component({
    selector: 'progress-graph',
    templateUrl: 'progress-graph.html'
})
export class ProgressGraphComponent {

    @Input()
    activityArray: Array<Activity>;

    @ViewChild('lineCanvas') lineCanvas;
    lineChart;

    constructor() {

    }

    ionViewDidLoad() {
        console.log("Im alive");
        this.createChart();
    }

    createChart() {
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {

            type: 'bar',
            data: {
                labels: ["Datum"],
                datasets: [{
                    label: "Label",
                    data: [[1, 5, 6, 3, 2]],
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

}
