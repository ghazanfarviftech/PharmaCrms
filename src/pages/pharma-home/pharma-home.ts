import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
import { AuthService } from '../../providers/auth-service';
import { PharmaLogin } from '../pharma-login/pharma-login';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Component({
  selector: 'page-pharma-home',
  templateUrl: 'pharma-home.html'
})
export class PharmaHome {
 loading: any;
  loginData = { username:'', password:'' };
  data: any;
  mydata: string[];

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController,public appPrefence: AppPreferences,private sqlite: SQLite) {
	  this.splashdata();
  }

  splashdata() {
    this.showLoader();
    this.authService.splashService().then((result) => {
      this.loading.dismiss();
      this.data = result;
	 var my= JSON.stringify(this.data);//this.data[0];//Object.values(this.data)
			this.creatingDb();
	  
	  //localStorage.setItem('token', this.data.access_token);
      //this.navCtrl.setRoot(TabsPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }
  
  creatingDb()
  {
	  this.sqlite.create({
  name: 'pharmaCrm.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {

	
	var createTblQuery = "CREATE TABLE DoctorOfEmployee ("
                + "id INTEGER PRIMARY KEY AUTOINCREMENT, "
                + "salesstageid TEXT ,"
                + "salesstagename TEXT ,"
                + "salesstagedescription TEXT ,"
                + "isactive TEXT ,"
                + "createdate TEXT ,"
                + "updatedate TEXT );";
				
				
    
				//db.openDBs();
				//db.open();
/* 
 db.executeSql(createTblQuery, {})
      .then(() => console.log('Executed SQL')
	  
	  )
      .catch(e => console.log(e));
*/
//db.close();
  })
  .catch(e => console.log(e));
 }
  
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
      //this.navCtrl.setRoot(TabsPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  logout() {
    this.navCtrl.setRoot(PharmaLogin);
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