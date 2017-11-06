import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ExplorePage } from '../pages/explore/explore';
import { FriendsPage } from '../pages/friends/friends';
import { LoginPage } from '../pages/login/login';
import { GaragePage } from '../pages/garage/garage';

import { AuthService } from './../services/auth/auth';
// import { MenuPage } from './../pages/menu/menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;
    // rootPage:any = TabsControllerPage;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    auth: AuthService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // auth.authNotifier.subscribe((authed) => {
      //   console.log('app.component.ts: auth.authNotifier =', authed);
      //   if (authed) {
      //     console.log('set rootPage to Tabs');
      //     this.rootPage = MenuPage;
      //   } else {
      //     console.log('set rootPage to Login');
      //     this.rootPage = LoginPage;
      //   }
      // });
      
    });
  }
  
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToExplore(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ExplorePage);
  }goToFriends(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FriendsPage);
  }goToGarage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GaragePage);
  }
}
