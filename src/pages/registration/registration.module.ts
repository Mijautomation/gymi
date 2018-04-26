import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { RegistrationFormComponent } from '../../components/registration-form/registration-form';
import { RegistrationPage } from './registration';

@NgModule({
    declarations: [
        RegistrationPage,
    ],
    imports: [
        IonicPageModule.forChild(RegistrationPage),
        ComponentsModule
    ]
})
export class RegistrationPageModule {
}
