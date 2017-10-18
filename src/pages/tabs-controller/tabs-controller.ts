import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CapturePage } from '../capture/capture';
import { GaragePage } from '../garage/garage';
import { ExplorePage } from '../explore/explore';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ExplorePage;
  tab2Root: any = CapturePage;
  tab3Root: any = GaragePage;
  tab4Root: any = ProfilePage;
  
  constructor(public navCtrl: NavController) {
  }
  goToCapture(params){
    if (!params) params = {};
    this.navCtrl.push(CapturePage);
  }goToGarage(params){
    if (!params) params = {};
    this.navCtrl.push(GaragePage);
  }
}
