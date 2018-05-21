import {Component} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Platform} from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import {LoginPage} from '../pages/login/login';
import {RegistrationPage} from '../pages/registration/registration';
import {ProgressionPage} from "../pages/progression/progression";
import {TimelinePage} from "../pages/timeline/timeline";
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
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    private setRootPage(): Page {
        if(this.sessionProvider.getCurrentToken() != null) {
            return TimelinePage;
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
