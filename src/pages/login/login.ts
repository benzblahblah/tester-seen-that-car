import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from './../../services/auth/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  displayName;
  private user: firebase.User;

  constructor(
    public navCtrl: NavController, 
    private afDB: AngularFireDatabase, 
    private afAuth: AngularFireAuth,
    public auth: AuthService
  ) {
    console.log("LoginPage");
    this.userAuth();
  }

  userAuth(){
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.user = user;
      this.displayName = user.displayName;
      this.createUser();
      this.navCtrl.setRoot('MenuPage');
    });
  }

// Auth Login Credentials
  // login() {
  //   console.log('login.ts login');
  //   let credentials = {username: 'foo', password: 'bar'}; // use real credentials from some form here
  //   this.auth.login(credentials);
  // }

  signInWithFacebook() {
    console.log('login.ts login');
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));    
  }

  // signOut() {
  //   this.afAuth.auth.signOut()
  //   .then(result => console.log("Sign-out",result))
  //   .catch(error => console.log("Error Sing-out",error));
  //   this.navCtrl.setRoot('LoginPage');
  // }

  createUser(){
    const dbUserRef = this.afDB.object('Users/'+this.user.uid);
    let dbUser = dbUserRef.valueChanges();
    let sub = dbUser.subscribe(userData => {
      if(userData !== null){
        console.log("User already exist");
      }else{
        console.log("User not exist");

        let Email = this.user.email;
        let Name = this.user.displayName;
        let Image = this.user.photoURL;

        dbUserRef.set({Email,Name,Image})
        .then(res=>console.log("Added new user to firedatabase"));
      }
      sub.unsubscribe();
    });
  }

  // goToExplore(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(ExplorePage);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
