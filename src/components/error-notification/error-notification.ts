import { Component, Input } from '@angular/core';

/**
 * Generated class for the ErrorNotificationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'error-notification',
  templateUrl: 'error-notification.html'
})
export class ErrorNotificationComponent {

  @Input() text: string;

  constructor() {
  }

}
