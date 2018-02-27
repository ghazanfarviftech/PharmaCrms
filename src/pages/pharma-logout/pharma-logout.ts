import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController, ToastController } from 'ionic-angular';
import { PharmaLogin } from '../pharma-login/pharma-login';


@Component({
  selector: 'page-pharma-logout',
  templateUrl: 'pharma-logout.html',
})
export class PharmaLogout {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  this.logout();
    console.log('ionViewDidLoad PharmaLogout');
  }

  logout() {
    this.navCtrl.setRoot(PharmaLogin);
  }

}
