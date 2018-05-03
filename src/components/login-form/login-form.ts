import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'login-form',
    templateUrl: 'login-form.html'
})
export class LoginFormComponent {

    private username: string;
    private password: string;

    public credentialsInvalid: boolean;
    public serverError: boolean;

    constructor(private userProvider : UserProvider) {
    }


    public login() : void {
        this.userProvider.login(this.username, this.password)
            .subscribe(
                data => this.loginUser(data),
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
