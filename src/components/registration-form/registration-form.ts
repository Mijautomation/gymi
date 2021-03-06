import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { sha256 } from "js-sha256";
import 'rxjs/add/operator/do';
import { User } from '../../models/user';
import { TabsPage } from '../../pages/tabs/tabs';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { SessionProvider } from '../../providers/session/session';


@Component({
    selector: 'registration-form',
    templateUrl: 'registration-form.html'
})

export class RegistrationFormComponent {

    text: string;
    user: User;
    password1: string = "";
    password2: string = "";

    constructor(private authenticationProvider: AuthenticationProvider,
                private sessionProvider: SessionProvider,
                private nav: NavController,
                public toastCtrl: ToastController) {
        this.user = new User();
    }


    public passwordValid(): boolean {
        return this.password1 == this.password2 && this.password1.length >= 8;
    }

    registerAccount(user: User) {
        this.user.password = sha256(this.password1);
        this.authenticationProvider.registerAccount(user)
            .subscribe(() => {
                this.authenticationProvider.login(this.user.username, this.user.password)
                    .subscribe(
                        data2 => {
                            this.sessionProvider.setCurrentToken(data2.body);
                            this.nav.setRoot(TabsPage);
                        },
                        err => this.handleError(err)
                    );
            },
                err => this.handleError(err));
    }

    private handleError(err: any) {
        this.presentToast(err.error);
    }

    presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }
}
