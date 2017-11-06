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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environments } from "../environments/environments";

import { AuthService } from '../services/auth/auth';
import { IonicStorageModule } from "@ionic/storage";

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
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environments.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
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
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}