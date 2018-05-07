import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
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
