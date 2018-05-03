import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { RegistrationPageModule } from '../pages/registration/registration.module';
import { TabsPage } from '../pages/tabs/tabs';
import { EquipmentProvider } from '../providers/equipment/equipment';
import { SessionProvider } from '../providers/session/session';
import { SocialProvider } from '../providers/social/social';
import { UserProvider } from '../providers/user/user';
import { MyApp } from './app.component';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        LoginPage
    ],
    imports: [
        BrowserModule,
        ComponentsModule,
        RegistrationPageModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        RegistrationPage,
        LoginPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        SocialProvider,
        EquipmentProvider,
        UserProvider,
        HttpClientModule,
        SessionProvider
    ]
})
export class AppModule {
}
