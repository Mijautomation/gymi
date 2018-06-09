import { Component, Input } from '@angular/core';
import { Timeline } from '../../models/timeline';

/**
 * Generated class for the TimelineItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'timeline-item',
    templateUrl: 'timeline-item.html'
})
export class TimelineItemComponent {

    @Input()
    item: Timeline;

}
