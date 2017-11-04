import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ExplorePage } from '../pages/explore/explore';
import { ProfilePage } from '../pages/profile/profile';
import { GaragePage } from '../pages/garage/garage';
import { FilteringPage } from '../pages/filtering/filtering';
import { CapturePage } from '../pages/capture/capture';
// import { ContactPage } from '../pages/contact/contact';
// import { FriendsPage } from '../pages/friends/friends';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ExplorePage,
    ProfilePage,
    GaragePage,
    FilteringPage,
    CapturePage,
    // ContactPage,
    // FriendsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ExplorePage,
    ProfilePage,
    GaragePage,
    FilteringPage,
    CapturePage,
    // ContactPage,
    // FriendsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}