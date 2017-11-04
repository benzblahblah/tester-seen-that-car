import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

// import { ExplorePage } from './../explore/explore';
// import { CapturePage } from './../capture/capture';
// import { GaragePage } from './../garage/garage';
// import { ProfilePage } from './../profile/profile';
// import { TabsPage } from './../tabs/tabs';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view

  rootPage = 'TabsPage';

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Explore', pageName: 'TabsPage', tabComponent: 'ExplorePage', index: 0, icon: 'ios-search' },
    // { title: 'Camera', pageName: 'TabsPage', tabComponent: 'CapturePage', index: 1, icon: 'ios-camera' },
    // { title: 'Garage', pageName: 'TabsPage', tabComponent: 'GaragePage', index: 2, icon: 'ios-car' },
    // { title: 'Profile', pageName: 'TabsPage', tabComponent: 'ProfilePage', index: 3, icon: 'ios-person' },
    { title: 'Friends', pageName: 'FriendsPage', icon: 'ios-people' },
    { title: 'Logout', pageName: 'LogoutPage', icon: 'ios-log-out' },
    { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle' },
    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
      console.log('page-index: '+page.index)
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNavs()[0];
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
}