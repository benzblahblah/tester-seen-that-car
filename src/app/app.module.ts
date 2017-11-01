import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FriendsPage } from '../pages/friends/friends';
import { ExplorePage } from '../pages/explore/explore';
import { ProfilePage } from '../pages/profile/profile';
import { GaragePage } from '../pages/garage/garage';
import { FilteringPage } from '../pages/filtering/filtering';
import { CapturePage } from '../pages/capture/capture';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    FriendsPage,
    ExplorePage,
    ProfilePage,
    GaragePage,
    FilteringPage,
    ContactPage,
    HomePage,
    AboutPage,
    CapturePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    FriendsPage,
    ExplorePage,
    ProfilePage,
    GaragePage,
    FilteringPage,
    ContactPage,
    HomePage,
    AboutPage,
    CapturePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}