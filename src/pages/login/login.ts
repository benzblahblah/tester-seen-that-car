import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) { }

  doLogin() {
    this.navCtrl.setRoot('MenuPage');
    // this.navCtrl.setRoot('TabsPage');    
  }

  // goToExplore(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(ExplorePage);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
