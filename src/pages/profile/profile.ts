import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {
    user: User;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public userProvider: UserProvider,
                public toastCtrl: ToastController) {
        if (this.navParams.get('userId')) {
            this.userProvider.getUserInfo(this.navParams.get('userId'))
                .subscribe((data) => this.user = data,
                    (err) => this.handleError(err));
        }
        else {
            this.userProvider.getLoggedInUserInfo()
                .subscribe((data) => {this.user = data; console.log(this.user);},
                    (err) => this.handleError(err));
        }


    }




    private handleError(err) {
        this.presentToast("Something went wrong with retrieving the data.");
    }

    private presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }


}
