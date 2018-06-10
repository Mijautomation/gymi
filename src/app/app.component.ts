import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { TabsPage } from '../pages/tabs/tabs';
import { SessionProvider } from '../providers/session/session';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                public sessionProvider: SessionProvider) {
        platform.ready().then(() => {
            this.rootPage = this.setRootPage();
            const backendUrl = "http://176.9.136.144:8080/Gymi/";
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    private setRootPage(): Page {
        if (this.sessionProvider.getCurrentToken() != null) {
            return TabsPage;
        }
        else {
            if (!localStorage.getItem('gimmy_account')) {
                return RegistrationPage;
            } else {
                return LoginPage;
            }
        }
    }
}
