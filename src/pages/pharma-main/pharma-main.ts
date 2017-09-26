import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { PharmaLogin } from '../pharma-login/pharma-login';
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'page-pharma-main',
  templateUrl: 'pharma-main.html',
})
export class PharmaMain {

  loginData = { username:'', password:'' };
  data: any;
  constructor(public navCtrl: NavController, public authService: AuthService) {
  console.log('ionViewDidLoad PharmaMain');
  this.authService.dayView(this.loginData).then((result) => {
      //this.loading.dismiss();
      this.data = result;
	       
    }, (err) => {
      //this.loading.dismiss();
      //this.presentToast(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PharmaMain');
  }


logout() {
    this.navCtrl.setRoot(PharmaLogin);
  }
}
