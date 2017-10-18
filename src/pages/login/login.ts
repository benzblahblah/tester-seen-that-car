import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplorePage } from '../explore/explore';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToExplore(params){
    if (!params) params = {};
    this.navCtrl.push(ExplorePage);
  }
}
