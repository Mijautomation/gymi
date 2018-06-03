import { Component, Input } from '@angular/core';


@Component({
    selector: 'navbar-title',
    templateUrl: 'navbar-title.html'
})
export class NavbarTitleComponent {

    @Input()
    title: string;

    constructor() {

    }

    openProfile() {
        console.log("hi");
    }

}

