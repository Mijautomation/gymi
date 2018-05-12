import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { sha256 } from 'js-sha256';
import { TimelinePage } from '../../pages/timeline/timeline';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { SessionProvider } from '../../providers/session/session';

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.html'
})

export class LoginFormComponent {

    private username: string;
    private password: string;

    public serverError: boolean;

    constructor(private authenticationProvider: AuthenticationProvider,
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
        this.serverError = false;
        this.nav.setRoot(TimelinePage);
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
