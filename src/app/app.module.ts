import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FriendsPage } from '../pages/friends/friends';
import { ExplorePage } from '../pages/explore/explore';
import { ProfilePage } from '../pages/profile/profile';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { GaragePage } from '../pages/garage/garage';
import { LoginPage } from '../pages/login/login';
import { FilteringPage } from '../pages/filtering/filtering';
import { CapturePage } from '../pages/capture/capture';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    FriendsPage,
    ExplorePage,
    ProfilePage,
    TabsControllerPage,
    GaragePage,
    LoginPage,
    FilteringPage,
    CapturePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FriendsPage,
    ExplorePage,
    ProfilePage,
    TabsControllerPage,
    GaragePage,
    LoginPage,
    FilteringPage,
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