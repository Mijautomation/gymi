import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { sha256 } from 'js-sha256';
import { TabsPage } from '../../pages/tabs/tabs';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { SessionProvider } from '../../providers/session/session';
import { UserProvider } from '../../providers/user/user';

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.html'
})

export class LoginFormComponent {

    private username: string;
    private password: string;

    public serverError: boolean;

    constructor(private authenticationProvider: AuthenticationProvider,
                private userProvider: UserProvider,
                private sessionProvider: SessionProvider,
                private nav: NavController,
                private toastCtrl: ToastController) {
    }


    public login(): void {
        this.authenticationProvider.login(this.username, sha256(this.password))
            .subscribe(
                data => {
                    this.sessionProvider.setCurrentToken(data.body);
                    this.loginUser(data);
                },
                err => this.handleError(err)
            );
    }

    private loginUser(data) {
        localStorage.setItem("gimmy_account", "true");
        this.serverError = false;
        this.nav.setRoot(TabsPage);
    }

    private handleError(err) {
        console.log(err);
        if (err.status == 401) {
            this.serverError = false;
            this.presentToast("Username or Password is invalid.");
        }
        else {
            this.serverError = true;
        }
    }

    private presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }
}
