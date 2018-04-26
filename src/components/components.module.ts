import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SocialItemComponent } from './social-item/social-item';
import { RegistrationFormComponent } from './registration-form/registration-form';

@NgModule({
    declarations: [SocialItemComponent,
        RegistrationFormComponent],
    imports: [IonicModule],
    exports: [SocialItemComponent,
        RegistrationFormComponent]

})
export class ComponentsModule {
}
