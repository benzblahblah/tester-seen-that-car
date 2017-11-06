import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login'; 

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, private afAuth: AngularFireAuth) { }

  signOut() {
    console.log('Pressed Logout Button');
    this.afAuth.auth.signOut()
    .then(result => console.log("Sign-out",result))
    .catch(error => console.log("Error Sing-out",error));
    // this.navCtrl.setRoot('LoginPage');
    this.app.getRootNav().setRoot(LoginPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
