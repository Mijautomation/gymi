import {Component} from '@angular/core';
import 'rxjs/add/operator/do';
import { User } from '../../models/user';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import {sha256} from "js-sha256";


@Component({
    selector: 'registration-form',
    templateUrl: 'registration-form.html'
})

export class RegistrationFormComponent {

    text: string;
    user: User;
    password1: string = "";
    password2: string = "";

    constructor(private authenticationProvider: AuthenticationProvider) {
        this.user = new User();
    }


    public passwordValid(): boolean {
        return this.password1 == this.password2 && this.password1.length >= 8;
    }

    registerAccount(user: User) {
        this.user.password = sha256(this.password1);
        this.authenticationProvider.registerAccount(user)
            .do((response) => console.log(response))
            .subscribe((user) => this.authenticationProvider.login(this.user.username, this.user.password));
    }

}
