import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {User} from '../../models/user';
import {UserProvider} from '../../providers/user/user';
import {FriendResponse} from "../../models/friendResponse";


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
        public toastCtrl: ToastController
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
                err => {this.handleError(err);console.log(err)}
            )
        ;
    }

    public getFriends() {
        this.userProvider.getFriendsForUser(this.user.id)
            .subscribe((data) => {
                    this.friends = data;
                    console.log(this.friends);
                    this.showFriends = true
                },
                (err) => this.handleError(err));
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
