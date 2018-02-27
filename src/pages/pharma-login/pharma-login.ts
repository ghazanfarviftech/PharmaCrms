import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
import { AuthService } from '../../providers/auth-service';
import { PharmaHome } from '../pharma-home/pharma-home';
import { PharmaExecution } from '../pharma-execution/pharma-execution';
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-pharma-login',
  templateUrl: 'pharma-login.html'
})
export class PharmaLogin {
 loading: any;
  loginData = { username:'', password:'' };
  data: any;
  mydata: string[];

  vartesting = "wow";
public base64Image: string;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController,public appPrefence: AppPreferences,private camera: Camera) {}

  doLogin() {



 //this.navCtrl.setRoot(PharmaExecution);

    this.showLoader();
    this.authService.login(this.loginData).then((result) => {


    console.log("yes yes yse " + result);

      this.loading.dismiss();
      this.data = result;
	 var my= JSON.stringify(this.data);//this.data[0];//Object.values(this.data)


   this.vartesting = my;
	//this.mydata = my.replace("}", "").split(":")[1].split("~");
     // this.appPrefence.store("empid", this.mydata[0]);
	 // this.appPrefence.store("hrchy", this.mydata[2]);
	 // this.appPrefence.store("username", this.mydata[3]);
	  
	  //localStorage.setItem('token', this.data.access_token);
      //this.navCtrl.setRoot(PharmaExecution);
     // this.navCtrl.setRoot(PharmaHome);
    }, (err) => {


this.vartesting = err;
    console.log("errrorrr agayayaayayayaya " + err);
      this.loading.dismiss();
      this.presentToast(err);
    });

    
  }

  register() {
   // this.navCtrl.push(RegisterPage);
  }




  opencamera() {


  this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;

    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });





  /*
   this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
    */
  }

   testing() {
   this.vartesting = 'wow thats great';
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