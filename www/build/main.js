webpackJsonp([10],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(storage) {
        var _this = this;
        this.storage = storage;
        this.authNotifier = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["ReplaySubject"](1);
        console.log('AuthService');
        // check if there is a token in storage
        this.storage.get('token').then(function (token) {
            if (token != null) {
                // broadcast that we are logged in
                _this.authNotifier.next(true);
            }
        });
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        this._checkCredentials(credentials).then(function (token) {
            // save token to storage
            _this.storage.set('token', token);
            // broadcast that we are now logged in
            _this.authNotifier.next(true);
        });
    };
    AuthService.prototype._checkCredentials = function (credentials) {
        // here you would of course check the credentials for real
        // probably using a http request or a library of the service
        // you are authenticating against
        return new Promise(function (resolve, reject) {
            // in this example we just resolve with a token
            resolve({ token: '123' });
        });
    };
    AuthService.prototype.logout = function () {
        // remove token from storage
        this.storage.remove('token');
        // broadcast that we are now logged out
        this.authNotifier.next(false);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], AuthService);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExplorePage = (function () {
    function ExplorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExplorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExplorePage');
    };
    return ExplorePage;
}());
ExplorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-explore',template:/*ion-inline-start:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/explore/explore.html"*/'<!--\n  Generated template for the ExplorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n        <ion-title>\n            Explore\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n      <ion-icon name="buffer"></ion-icon>\n    </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n    <ion-card *ngIf="photo">\n        <img [src]="photo" />\n    </ion-card>\n    <ion-list id="explore-list10">\n        <ion-searchbar placeholder="Search" name="" id="explore-search2"></ion-searchbar>\n        <ion-item color="none" id="explore-list-item19">\n            <ion-avatar item-left>\n                <img src="assets/img/vCM67rRyCGzbRxYbIkOQ_dave.jpg" />\n            </ion-avatar>\n            <h2>\n                Dave Pocoro\n            </h2>\n        </ion-item>\n    </ion-list>\n    <div>\n        <img src="assets/img/PKS9kU1dSxy4whILYvtT_bad-drivers-7.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div>\n    <ion-list id="explore-list12">\n        <ion-item id="explore-list-item-container2">\n            <div id="explore-markdown2" class="show-list-numbers-and-dots">\n                <p style="margin-top:0px;color:#000000;">\n                    Check this, what just he did?\n                </p>\n            </div>\n        </ion-item>\n    </ion-list>\n    <h5 id="explore-heading1" style="color:#000000;font-weight:600;">\n        Loading data...\n    </h5>\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/explore/explore.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ExplorePage);

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GaragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GaragePage = (function () {
    function GaragePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GaragePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GaragePage');
    };
    return GaragePage;
}());
GaragePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-garage',template:/*ion-inline-start:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/garage/garage.html"*/'<!--\n  Generated template for the GaragePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Garage\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n        <ion-icon name="add"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n    <ion-list id="garage-list7">\n        <ion-item-sliding>\n            <ion-item color="none" id="garage-list-item13">\n                <ion-icon name="car" item-left></ion-icon>\n                Alphard Vellfire\n            </ion-item>\n            <ion-item-options side="left">\n                <button ion-button color="assertive">\n          Delete\n        </button>\n            </ion-item-options>\n        </ion-item-sliding>\n        <ion-item-sliding>\n            <ion-item color="none" id="garage-list-item16">\n                <ion-icon name="car" item-left></ion-icon>\n                Porsche 911\n            </ion-item>\n            <ion-item-options side="left">\n                <button ion-button color="assertive">\n          Delete\n        </button>\n            </ion-item-options>\n        </ion-item-sliding>\n        <ion-item-sliding>\n            <ion-item color="none" id="garage-list-item14">\n                <ion-icon name="car" item-left></ion-icon>\n                Toyota Altis\n            </ion-item>\n            <ion-item-options side="left">\n                <button ion-button color="assertive">\n          Delete\n        </button>\n            </ion-item-options>\n        </ion-item-sliding>\n        <ion-item-sliding>\n            <ion-item color="none" id="garage-list-item15">\n                <ion-icon name="car" item-left></ion-icon>\n                Toyota Supra\n            </ion-item>\n            <ion-item-options side="left">\n                <button ion-button color="assertive">\n          Delete\n        </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/garage/garage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], GaragePage);

//# sourceMappingURL=garage.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_auth__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, afDB, afAuth, auth) {
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.auth = auth;
        console.log("LoginPage");
        this.userAuth();
    }
    LoginPage.prototype.userAuth = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.displayName = null;
                return;
            }
            _this.user = user;
            _this.displayName = user.displayName;
            _this.createUser();
            _this.navCtrl.setRoot('MenuPage');
        });
    };
    // Auth Login Credentials
    // login() {
    //   console.log('login.ts login');
    //   let credentials = {username: 'foo', password: 'bar'}; // use real credentials from some form here
    //   this.auth.login(credentials);
    // }
    LoginPage.prototype.signInWithFacebook = function () {
        console.log('login.ts login');
        this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider())
            .then(function (res) { return console.log(res); });
    };
    // signOut() {
    //   this.afAuth.auth.signOut()
    //   .then(result => console.log("Sign-out",result))
    //   .catch(error => console.log("Error Sing-out",error));
    //   this.navCtrl.setRoot('LoginPage');
    // }
    LoginPage.prototype.createUser = function () {
        var _this = this;
        var dbUserRef = this.afDB.object('Users/' + this.user.uid);
        var dbUser = dbUserRef.valueChanges();
        var sub = dbUser.subscribe(function (userData) {
            if (userData !== null) {
                console.log("User already exist");
            }
            else {
                console.log("User not exist");
                var Email = _this.user.email;
                var Name = _this.user.displayName;
                var Image_1 = _this.user.photoURL;
                dbUserRef.set({ Email: Email, Name: Name, Image: Image_1 })
                    .then(function (res) { return console.log("Added new user to firedatabase"); });
            }
            sub.unsubscribe();
        });
    };
    // goToExplore(params){
    //   if (!params) params = {};
    //   this.navCtrl.push(ExplorePage);
    // }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/login/login.html"*/'<!-- <ion-header>\n    <ion-navbar>\n        <ion-title>\n            Auth with Ionic\n        </ion-title>\n    </ion-navbar>\n</ion-header> -->\n\n\n<ion-content padding id="page6">\n    <div>\n        <img src="assets/img/5QZinOvtSVi9Kj2ijF1G_iTunesArtwork.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div>\n\n    <h5 text-align: center>Welcome, {{displayName}}</h5>\n    <button ion-button block text-align:center icon-left (click)="signInWithFacebook()">\n            <ion-icon name="logo-facebook"></ion-icon> Login via Facebook\n        </button>\n\n    <!-- <form id="login-form1">\n        <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n        <ion-list id="login-list8">\n            <ion-item id="login-input1">\n                <ion-label>\n                    Email\n                </ion-label>\n                <ion-input type="email" placeholder="justclicklogin"></ion-input>\n            </ion-item>\n            <ion-item id="login-input2">\n                <ion-label>\n                    Password\n                </ion-label>\n                <ion-input type="password" placeholder=""></ion-input>\n            </ion-item>\n        </ion-list>\n    </form> -->\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_5__services_auth_auth__["a" /* AuthService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.module": [
		716,
		4
	],
	"../pages/explore/explore.module": [
		718,
		9
	],
	"../pages/filtering/filtering.module": [
		717,
		8
	],
	"../pages/friends/friends.module": [
		719,
		7
	],
	"../pages/garage/garage.module": [
		720,
		6
	],
	"../pages/logout/logout.module": [
		721,
		3
	],
	"../pages/menu/menu.module": [
		722,
		2
	],
	"../pages/profile/profile.module": [
		723,
		5
	],
	"../pages/special/special.module": [
		724,
		1
	],
	"../pages/tabs/tabs.module": [
		725,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Profile\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n    <ion-list id="profile-list2">\n        <ion-item color="none" id="profile-list-item1">\n            <ion-thumbnail item-left>\n                <img src="assets/img/2qFApxNcR4qVwdG49CWd_Gavin.jpg" />\n            </ion-thumbnail>\n            <h2>\n                Benz Natthakul\n            </h2>\n        </ion-item>\n        <ion-item-divider color="light" id="profile-list-item-divider3">\n            Car History\n        </ion-item-divider>\n    </ion-list>\n    <ion-list id="profile-list4">\n        <ion-item color="none" id="profile-list-item9">\n            Lamborghini\n            <ion-note item-right></ion-note>\n        </ion-item>\n        <ion-item color="none" id="profile-list-item10">\n            Mercedes-Benz\n            <ion-note item-right></ion-note>\n        </ion-item>\n        <ion-item color="none" id="profile-list-item8">\n            Toyota\n            <ion-note item-right></ion-note>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilteringPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FilteringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilteringPage = (function () {
    function FilteringPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilteringPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilteringPage');
    };
    return FilteringPage;
}());
FilteringPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filtering',template:/*ion-inline-start:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/filtering/filtering.html"*/'<!--\n  Generated template for the FilteringPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Filtering\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n    <form id="filtering-form2">\n        <ion-item id="filtering-input6">\n            <ion-label stacked>\n                License Plate\n            </ion-label>\n            <ion-input type="text" placeholder="AB 1234" name="License Plate"></ion-input>\n        </ion-item>\n        <ion-item id="filtering-select1">\n            <ion-label>\n                Brand\n            </ion-label>\n            <ion-select name="Brand">\n                <ion-option>\n                    Audi\n                </ion-option>\n                <ion-option>\n                    Toyota\n                </ion-option>\n                <ion-option>\n                    Honda\n                </ion-option>\n                <ion-option>\n                    Isuzu\n                </ion-option>\n                <ion-option>\n                    Mercedes Benz\n                </ion-option>\n                <ion-option>\n                    BMW\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item id="filtering-select2">\n            <ion-label>\n                Color\n            </ion-label>\n            <ion-select name="Color">\n                <ion-option>\n                    Black\n                </ion-option>\n                <ion-option>\n                    White\n                </ion-option>\n                <ion-option>\n                    Brown\n                </ion-option>\n                <ion-option>\n                    Blue\n                </ion-option>\n                <ion-option>\n                    Red\n                </ion-option>\n                <ion-option>\n                    Green\n                </ion-option>\n                <ion-option>\n                    Grey\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item id="filtering-select3">\n            <ion-label>\n                Date/Time\n            </ion-label>\n            <ion-select name="Date/Time"></ion-select>\n        </ion-item>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/filtering/filtering.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FilteringPage);

//# sourceMappingURL=filtering.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendsPage = (function () {
    function FriendsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsPage');
    };
    return FriendsPage;
}());
FriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friends',template:/*ion-inline-start:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/friends/friends.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Friends\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n        <ion-icon name="add"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n    <ion-list id="friends-list9">\n        <ion-item color="none" id="friends-list-item11">\n            <ion-avatar item-left>\n                <img src="assets/img/619VpxuQfGQaWDYyAzKA_Grumpy_Cat.jpg" />\n            </ion-avatar>\n            <h2>\n                Gavin\n            </h2>\n        </ion-item>\n        <ion-item color="none" id="friends-list-item17">\n            <ion-avatar item-left>\n                <img src="assets/img/10ceJaViQimRtfslZ2qN_Meme.jpg" />\n            </ion-avatar>\n            <h2>\n                Bryan\n            </h2>\n        </ion-item>\n        <ion-item color="none" id="friends-list-item18">\n            <ion-avatar item-left>\n                <img src="assets/img/PZOXS2FFTIqLySac46w1_Bill.jpg" />\n            </ion-avatar>\n            <h2>\n                Jet\n            </h2>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/friends/friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FriendsPage);

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NavController } from 'ionic-angular';



var CapturePage = (function () {
    function CapturePage(alerCtrl, navCtrl, camera, navParams) {
        this.alerCtrl = alerCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.navParams = navParams;
    }
    CapturePage.prototype.doConfirm = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Open the camera?',
            message: 'Do you agree to allow us to use your camera?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                        var options = {
                            quality: 50,
                            destinationType: _this.camera.DestinationType.FILE_URI,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            saveToPhotoAlbum: true
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64:
                            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.photo = _this.base64Image;
                        }, function (err) {
                            // Handle error
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    CapturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CapturePage');
    };
    return CapturePage;
}());
CapturePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-capture',template:/*ion-inline-start:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/capture/capture.html"*/'<!--\n  Generated template for the CapturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n        <ion-title>\n            Capture\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n    <div class="spacer" style="height:50px;" id="capture-spacer5"></div>\n    <button id="capture-button9" ion-button clear color="positive" block>\n  <ion-icon name="car"></ion-icon>\n</button>\n    <h5 id="capture-heading2" style="color:#000000;text-align:center;">\n        Take some cars here!\n    </h5>\n    <div class="spacer" style="height:50px;" id="capture-spacer6"></div>\n\n    <button id="capture-button8" ion-button color="primary" block icon-left (click)="doConfirm()"> <ion-icon name="camera"></ion-icon> Tap for photo or hold for video.</button>\n\n    <!-- <button id="capture-button8" ion-button color="positive" block icon-left>\n  <ion-icon name="camera"></ion-icon>\n  Tap for photo or hold for video.\n</button> -->\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/capture/capture.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CapturePage);

//# sourceMappingURL=capture.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_explore_explore__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_garage_garage__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_filtering_filtering__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_capture_capture__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environments_environments__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_auth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_explore_explore__["a" /* ExplorePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_garage_garage__["a" /* GaragePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_filtering_filtering__["a" /* FilteringPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_capture_capture__["a" /* CapturePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/filtering/filtering.module#FilteringPageModule', name: 'FilteringPage', segment: 'filtering', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/explore/explore.module#ExplorePageModule', name: 'ExplorePage', segment: 'explore', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/garage/garage.module#GaragePageModule', name: 'GaragePage', segment: 'garage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/special/special.module#SpecialPageModule', name: 'SpecialPage', segment: 'special', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_17__environments_environments__["a" /* environments */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_explore_explore__["a" /* ExplorePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_garage_garage__["a" /* GaragePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_filtering_filtering__["a" /* FilteringPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_capture_capture__["a" /* CapturePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["a" /* AngularFireDatabase */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__services_auth_auth__["a" /* AuthService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_explore_explore__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_friends_friends__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_garage_garage__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_auth__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { MenuPage } from './../pages/menu/menu';
var MyApp = (function () {
    // rootPage:any = TabsControllerPage;
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // auth.authNotifier.subscribe((authed) => {
            //   console.log('app.component.ts: auth.authNotifier =', authed);
            //   if (authed) {
            //     console.log('set rootPage to Tabs');
            //     this.rootPage = MenuPage;
            //   } else {
            //     console.log('set rootPage to Login');
            //     this.rootPage = LoginPage;
            //   }
            // });
        });
    }
    MyApp.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.goToExplore = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_explore_explore__["a" /* ExplorePage */]);
    };
    MyApp.prototype.goToFriends = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_friends_friends__["a" /* FriendsPage */]);
    };
    MyApp.prototype.goToGarage = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_garage_garage__["a" /* GaragePage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/app/app.html"*/'<!DOCTYPE html>\n<ion-nav [root]="rootPage"></ion-nav>\n\n\n\n<!-- <ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <button id="menu-button1" ion-button clear color="dark" block icon-left style="font-weight:600;text-align:left;" menuClose="" on-click="goToExplore()">\n      <ion-icon name="search"></ion-icon>\n      Explore\n    </button>\n    <button id="menu-button4" ion-button clear color="positive" block icon-left style="font-weight:600;text-align:left;" menuClose="" on-click="goToFriends()">\n      <ion-icon name="people"></ion-icon>\n      Friends\n    </button>\n    <button id="menu-button3" ion-button clear color="positive" block icon-left style="font-weight:600;text-align:left;">\n      <ion-icon name="settings"></ion-icon>\n      Setting\n    </button>\n    <button id="menu-button2" ion-button clear color="assertive" block icon-left style="font-weight:600;text-align:left;" menuClose="" on-click="goToLogin()">\n      <ion-icon name="log-out"></ion-icon>\n      Log out\n    </button>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav> -->'/*ion-inline-end:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_auth_auth__["a" /* AuthService */]) === "function" && _e || Object])
], MyApp);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/ntkbb/Desktop/ASM2/tester-seen-that-car-master-v3/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environments; });
var environments = {
    firebaseConfig: {
        apiKey: "AIzaSyCR5LzkkNpZ2VRSz9Q2eWketqcYCEGWgH8",
        authDomain: "seen-that-car.firebaseapp.com",
        databaseURL: "https://seen-that-car.firebaseio.com",
        projectId: "seen-that-car",
        storageBucket: "seen-that-car.appspot.com",
        messagingSenderId: '345913838178'
    }
};
//# sourceMappingURL=environments.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map