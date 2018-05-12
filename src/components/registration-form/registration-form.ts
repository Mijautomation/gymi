import { Component } from '@angular/core';
import 'rxjs/add/operator/do';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { TimelinePage } from '../../pages/timeline/timeline';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { sha256 } from "js-sha256";
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

    constructor(private authenticationProvider: AuthenticationProvider, private sessionProvider: SessionProvider, private nav: NavController) {
        this.user = new User();
    }


    public passwordValid(): boolean {
        return this.password1 == this.password2 && this.password1.length >= 8;
    }

    registerAccount(user: User) {
        this.user.password = sha256(this.password1);
        this.authenticationProvider.registerAccount(user)
            .subscribe(data => {
                this.authenticationProvider.login(this.user.username, this.user.password)
                    .subscribe(
                        data2 => {
                            this.sessionProvider.setCurrentToken(data2.body);
                            this.nav.setRoot(TimelinePage);
                        },
                        err => this.handleError(err)
                    );
            },
                err => this.handleError(err));
    }

    private handleError(err: any) {
        console.log(err);
    }
}
