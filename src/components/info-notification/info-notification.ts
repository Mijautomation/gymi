import { Component } from '@angular/core';

/**
 * Generated class for the InfoNotificationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info-notification',
  templateUrl: 'info-notification.html'
})
export class InfoNotificationComponent {

  text: string;

  constructor() {
    console.log('Hello InfoNotificationComponent Component');
    this.text = 'Hello World';
  }

}
