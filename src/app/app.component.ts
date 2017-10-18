import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ExplorePage } from '../pages/explore/explore';
import { FriendsPage } from '../pages/friends/friends';
import { LoginPage } from '../pages/login/login';
import { GaragePage } from '../pages/garage/garage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
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
