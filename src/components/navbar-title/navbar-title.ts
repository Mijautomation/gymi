import { Component, Input } from '@angular/core';
import {ModalController} from "ionic-angular";
import {ProfilePage} from "../../pages/profile/profile";


@Component({
    selector: 'navbar-title',
    templateUrl: 'navbar-title.html'
})
export class NavbarTitleComponent {

    @Input()
    title: string;

    constructor(private modalController: ModalController) {

    }

    openProfile() {
        let modal = this.modalController.create(ProfilePage);
        modal.present();
    }

}

