import {Component} from '@angular/core';
import {
    AlertController,
    IonicPage,
    ModalController,
    NavController,
    NavParams,
    ToastController,
    ViewController
} from 'ionic-angular';
import {User} from '../../models/user';
import {UserProvider} from '../../providers/user/user';
import {FriendResponse} from "../../models/friendResponse";
import {Observable} from "rxjs/Observable";


@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {
    user: User;
    friends: FriendResponse;
    showFriends: boolean = false;
    searchUsername: string;
    foundUser: User;


    constructor(
        public navParams: NavParams,
        public userProvider: UserProvider,
        public toastCtrl: ToastController,
        private viewController: ViewController,
        public alertCtrl: AlertController
    ) {
        let userId = this.navParams.get('userId');
        if (userId) {
            this.userProvider.getUserInfo(userId)
                .subscribe((data) => {
                        this.user = data;
                        this.getFriends();
                    },
                    (err) => this.handleError(err));
        } else {
            this.userProvider.getLoggedInUserInfo()
                .subscribe((data) => {
                        this.user = data;
                        this.getFriends();
                    },
                    (err) => this.handleError(err));
        }

    }

    public searchByUsername(): void {
        this.userProvider.getUserByUsername(this.searchUsername)
            .subscribe(data => (this.foundUser = data));
    }

    public addFriend(userId: number) {
        this.userProvider.sendFriendRequest(this.user.id, userId)
            .subscribe(() => this.presentToast("Friend added!"),
                err => {
                    this.presentToast("You are already friends with this person");
                }
            )
        ;
    }

    public getFriends() {
        this.userProvider.getFriendsForUser(this.user.id)
            .subscribe((data) => {
                    this.friends = data;
                    this.showFriends = true
                },
                (err) => this.handleError(err));
    }


    private handleError(err) {
        this.presentToast("Something went wrong with retrieving the data.");
    }


    public deleteFriendship(userId2: number) {
        let confirm = this.alertCtrl.create({
            title: 'Are you sure you want to delete this friendship?',
            message: 'This cannot be undone',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.userProvider.deleteFriendship(userId2).subscribe(
                            () => this.presentToast("Friend deleted"),
                            err => console.log(err)
                        );
                    }
                }
            ]
        });
        confirm.present();
    }

    closeModal() {
        this.viewController.dismiss();
    }

    private presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }


}
