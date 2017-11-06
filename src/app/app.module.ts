import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
// import { ExplorePage } from '../pages/explore/explore';
// import { ProfilePage } from '../pages/profile/profile';
// import { GaragePage } from '../pages/garage/garage';
// import { FilteringPage } from '../pages/filtering/filtering';
// import { CapturePage } from '../pages/capture/capture';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environments } from "../environments/environments";

import { AuthService } from '../services/auth/auth';
import { IonicStorageModule } from "@ionic/storage";

import { ExplorePageModule } from '../pages/explore/explore.module';
import { FilteringPageModule } from '../pages/filtering/filtering.module';
import { GaragePageModule } from '../pages/garage/garage.module';
import { LoginPageModule } from '../pages/login/login.module';
import { CapturePageModule } from '../pages/capture/capture.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { FriendsPageModule } from '../pages/friends/friends.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
    // LoginPage,
    // ExplorePage,
    // ProfilePage,
    // GaragePage,
    // FilteringPage,
    // CapturePage,
    // ContactPage,
    // FriendsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environments.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
// start-----[PageModule]------
    ExplorePageModule,
    FilteringPageModule,
    GaragePageModule,
    LoginPageModule,
    CapturePageModule,
    ProfilePageModule,
    MenuPageModule,
    TabsPageModule,
    FriendsPageModule


// end-----[PageModule]------
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    // LoginPage,
    // ExplorePage,
    // ProfilePage,
    // GaragePage,
    // FilteringPage,
    // CapturePage,
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