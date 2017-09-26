import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
import { AuthService } from '../../providers/auth-service';
import { PharmaHome } from '../pharma-home/pharma-home';


@Component({
  selector: 'page-pharma-login',
  templateUrl: 'pharma-login.html'
})
export class PharmaLogin {
 loading: any;
  loginData = { username:'', password:'' };
  data: any;
  mydata: string[];

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController,public appPrefence: AppPreferences) {}

  doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
	 var my= JSON.stringify(this.data);//this.data[0];//Object.values(this.data)
	this.mydata = my.replace("}", "").split(":")[1].split("~");
      this.appPrefence.store("empid", this.mydata[0]);
	  this.appPrefence.store("hrchy", this.mydata[2]);
	  this.appPrefence.store("username", this.mydata[3]);
	  
	  //localStorage.setItem('token', this.data.access_token);
      this.navCtrl.setRoot(PharmaHome);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  register() {
   // this.navCtrl.push(RegisterPage);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}