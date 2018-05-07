import { Component } from '@angular/core';
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

    constructor(private authenticationProvider: AuthenticationProvider, private sessionProvider: SessionProvider) {
    }


    public login(): void {
        this.authenticationProvider.login(this.username, this.password)
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
