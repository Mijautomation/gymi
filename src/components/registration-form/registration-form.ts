import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserProvider } from '../../providers/user/user';
import 'rxjs/add/operator/do';

/**
 * Generated class for the RegistrationFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'registration-form',
    templateUrl: 'registration-form.html'
})
export class RegistrationFormComponent {

    text: string;
    user: User;
    password1: string = "";
    password2: string = "";
    constructor(private userProvider: UserProvider) {
        this.user = new User();
    }


    public passwordValid(): boolean {
        return this.password1 == this.password2 && this.password1.length > 8;
    }

    registerAccount(user: User) {
        this.user.password = this.password1;
        this.userProvider.registerAccount(user)
            .do((response) => console.log(response))
            .subscribe((user) => this.userProvider.login(this.user.username, this.user.password));
    }
}
