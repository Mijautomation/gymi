import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

    public credentialsInvalid: boolean;
    public serverError: boolean;

    constructor(private authenticationProvider: AuthenticationProvider, private sessionProvider: SessionProvider, private nav: NavController) {
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
        this.credentialsInvalid = false;
        this.serverError = false;
        this.nav.setRoot(TimelinePage);
    }

    private handleError(err) {
        console.log(err);
        if (err.status == 401) {
            this.credentialsInvalid = true;
            this.serverError = false;
        }
        else {
            this.serverError = true;
            this.credentialsInvalid = false;
        }
    }
}
