import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module';
import { MjwtInterceptor } from '../interceptors/mjwt-interceptor.service';

import { AboutPage } from '../pages/about/about';
import { ActivityManagementPage } from "../pages/activity-management/activity-management";
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LeaderboardPage } from "../pages/leaderboard/leaderboard";
import { LoginPage } from '../pages/login/login';
import { ProgressionPage } from "../pages/progression/progression";
import { RegistrationPage } from '../pages/registration/registration';
import { RegistrationPageModule } from '../pages/registration/registration.module';
import { ModalAddActivityPage, SessionsPage } from '../pages/sessions/sessions';
import { TabsPage } from '../pages/tabs/tabs';
import { TimelinePage } from "../pages/timeline/timeline";
import { ActivityProvider } from '../providers/activity/activity';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { SessionProvider } from '../providers/session/session';
import { UserProvider } from '../providers/user/user';
import { MyApp } from './app.component';
import { ChartsModule } from 'ng2-charts';
import {ProfilePage} from "../pages/profile/profile";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        LoginPage,
        TimelinePage,
        LeaderboardPage,
        ProgressionPage,
        ActivityManagementPage,
        ModalAddActivityPage,
        SessionsPage,
        ProfilePage
    ],
    imports: [
        BrowserModule,
        ComponentsModule,
        RegistrationPageModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp),
        ChartsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        RegistrationPage,
        LoginPage,
        TimelinePage,
        LeaderboardPage,
        ProgressionPage,
        ActivityManagementPage,
        ModalAddActivityPage,
        SessionsPage,
        ProfilePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        UserProvider,
        HttpClientModule,
        SessionProvider,
        AuthenticationProvider,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MjwtInterceptor,
            multi: true
        },
    ActivityProvider
    ]
})
export class AppModule {
}
