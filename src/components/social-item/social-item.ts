import { Component } from '@angular/core';

/**
 * Generated class for the SocialItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'social-item',
  templateUrl: 'social-item.html'
})
export class SocialItemComponent {

  text: string;

  constructor() {
    console.log('Hello SocialItemComponent Component');
    this.text = 'Hello World';
  }

}
