import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
import { AuthService } from '../../providers/auth-service';
import { PharmaLogin } from '../pharma-login/pharma-login';
=======
import { NavController, Platform, LoadingController, ToastController } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
import { AuthService } from '../../providers/auth-service';
import { PharmaLogin } from '../pharma-login/pharma-login';
import { PharmaMain } from '../pharma-main/pharma-main';
>>>>>>> 0e4910a9dca6bf28330389e880288446bfcedf42
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

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController,public appPrefence: AppPreferences,private sqlite: SQLite) {
	  this.splashdata();
=======
  public database: SQLite;
  public sqliteexequery: SQLiteObject;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController,public appPrefence: AppPreferences,private sqlite: SQLite, private platform: Platform) {

     this.platform.ready().then(() => {
         //  this.splashdata();
this.navCtrl.setRoot(PharmaMain);
        });

	  
>>>>>>> 0e4910a9dca6bf28330389e880288446bfcedf42
  }

  splashdata() {
    this.showLoader();
    this.authService.splashService().then((result) => {
      this.loading.dismiss();
      this.data = result;
	 var my= JSON.stringify(this.data);//this.data[0];//Object.values(this.data)
			this.creatingDb();
	  
	  //localStorage.setItem('token', this.data.access_token);
<<<<<<< HEAD
      //this.navCtrl.setRoot(TabsPage);
=======
      
>>>>>>> 0e4910a9dca6bf28330389e880288446bfcedf42
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }
  
<<<<<<< HEAD
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
=======

  creatingDb()
  {


/*
        let db = new SQLite();
            db.create({
                name: "pharmacrm.db",
                location: "default"
            }).then((sqliteexequery: SQLiteObject) => {
                sqliteexequery.executeSql("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)", {}).then((data) => {
                    console.log("TABLE CREATED: at time of creating db", data);
                }, (error) => {
                    console.error("Unable to execute sql at time of creating db", error);
                })
            }, (error) => {
                console.error("Unable to open database at time of creating db", error);
            });
          */

       this.database = new SQLite();
            this.database.create({name: "pharmacrm.db", location: "default"}).then((sqliteexequery: SQLiteObject) => {

            console.log("TABLE CREATED: at time of creating db", sqliteexequery);
                this.sqliteexequery=sqliteexequery;
                this.refresh();
            }, (error) => {
                console.log("ERROR: ", error);
            });



	
>>>>>>> 0e4910a9dca6bf28330389e880288446bfcedf42
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

<<<<<<< HEAD
=======
   public refresh() {

          /* sqliteexequery.executeSql("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)", {}).then((data) => {
                    console.log("TABLE CREATED: at time of refresh ", data);
                }, (error) => {
                    console.error("Unable to execute sql at time of refresh", error);
                })*/
       this.sqliteexequery.executeSql("DROP TABLE IF EXISTS DoctorOfEmployee",{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS", error);
                })
        this.sqliteexequery.executeSql("CREATE TABLE DoctorOfEmployee (id INTEGER PRIMARY KEY AUTOINCREMENT,DocCode TEXT ,DoctorName TEXT ,DoctorID TEXT ,DoctorAddress TEXT ,DoctorType TEXT )",{}).then((data) => {
                    console.log("TABLE CREATED: DoctorOfEmployee at time of refresh", data);
                }, (error) => {
                    console.error("Unable to execute sql DoctorOfEmployee at time of refresh", error);
                })


            this.sqliteexequery.executeSql("DROP TABLE IF EXISTS ProductsSku" ,{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS ProductsSku", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS ProductsSku", error);
                })
            this.sqliteexequery.executeSql("DROP TABLE IF EXISTS ProductDoctors" ,{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS ProductDoctors", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS ProductDoctors", error);
                })
            this.sqliteexequery.executeSql("CREATE TABLE ProductsSku (id INTEGER PRIMARY KEY AUTOINCREMENT,ProdId INTEGER ,SkuId INTEGER ,Name TEXT)",{}).then((data) => {
                    console.log("TABLE CREATED: ProductsSku at time of refresh", data);
                }, (error) => {
                    console.error("Unable to execute sql ProductsSku at time of refresh", error);
                })
            this.sqliteexequery.executeSql("CREATE TABLE ProductDoctors (id INTEGER PRIMARY KEY AUTOINCREMENT,ProdId INTEGER ,DoctorId INTEGER )",{}).then((data) => {
                    console.log("TABLE CREATED: ProductDoctors at time of refresh", data);
                }, (error) => {
                    console.error("Unable to execute sql ProductDoctors at time of refresh", error);
                })

            this.sqliteexequery.executeSql("DROP TABLE IF EXISTS CompetitorProducts",{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS CompetitorProducts", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS CompetitorProducts", error);
                })
            this.sqliteexequery.executeSql("CREATE TABLE CompetitorProducts (id INTEGER PRIMARY KEY AUTOINCREMENT,CompetitorProductId int ,ProductId int ,ProductName TEXT ,CompetitorCompanyName TEXT ,CompetitorProductSKUName TEXT )",{}).then((data) => {
                    console.log("TABLE CREATED: CompetitorProducts at time of refresh", data);
                }, (error) => {
                    console.error("Unable to execute sql CompetitorProducts at time of refresh", error);
                })

            this.sqliteexequery.executeSql("DROP TABLE IF EXISTS DoctorsPharmacy",{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS DoctorsPharmacy", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS DoctorsPharmacy", error);
                })
        this.sqliteexequery.executeSql("CREATE TABLE DoctorsPharmacy (id INTEGER PRIMARY KEY AUTOINCREMENT,PharmacyId int ,PharmacyCode TEXT ,PharmacyName TEXT ,DoctorId TEXT )",{}).then((data) => {
                    console.log("TABLE CREATED: DoctorsPharmacy at time of refresh", data);
                }, (error) => {
                    console.error("Unable to execute sql DoctorsPharmacy at time of refresh", error);
                })


                this.sqliteexequery.executeSql("DROP TABLE IF EXISTS DoctorSGHistory",{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS DoctorSGHistory", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS DoctorSGHistory", error);
                })
                 this.sqliteexequery.executeSql("CREATE TABLE DoctorSGHistory (id INTEGER PRIMARY KEY AUTOINCREMENT,drid INTEGER ,drname TEXT ,month INTEGER ,year INTEGER ,quantity INTEGER ,pid INTEGER ,pname TEXT ,type TEXT )",{}).then((data) => {
                    console.log("TABLE CREATED: DoctorSGHistory at time of refresh", data);
                }, (error) => {
                    console.error("Unable to execute sql DoctorSGHistory at time of refresh", error);
                })

this.sqliteexequery.executeSql("DROP TABLE IF EXISTS SGHistoryInventory",{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS SGHistoryInventory", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS SGHistoryInventory", error);
                })
                      this.sqliteexequery.executeSql("CREATE TABLE SGHistoryInventory (id INTEGER PRIMARY KEY AUTOINCREMENT,pid INTEGER ,pname TEXT ,month INTEGER ,year INTEGER ,issued INTEGER ,quantity INTEGER ,type TEXT )",{}).then((data) => {
                    console.log("TABLE CREATED: SGHistoryInventory at time of refresh", data);
                }, (error) => {
                    console.error("Unable to execute sql SGHistoryInventory at time of refresh", error);
                })

                     this.sqliteexequery.executeSql("DROP TABLE IF EXISTS  PDFDetails",{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS PDFDetails", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS PDFDetails", error);
                })
        this.sqliteexequery.executeSql("CREATE TABLE PDFDetails (id INTEGER PRIMARY KEY AUTOINCREMENT, IDs INTEGER ,FileName TEXT ,Description TEXT ,ServerFilePath TEXT ,LocalFilePath TEXT ,NumOfPages INTEGER ,StartDate TEXT ,EndDate TEXT )",{}).then((data) => {
                    console.log("TABLE CREATED: PDFDetails at time of refresh", data);
                }, (error) => {
                    console.error("Unable to execute sql PDFDetails at time of refresh", error);
                })


                this.sqliteexequery.executeSql("DROP TABLE IF EXISTS SurveyForm",{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS SurveyForm", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS SurveyForm", error);
                })
        this.sqliteexequery.executeSql("CREATE TABLE SurveyForm (id INTEGER PRIMARY KEY AUTOINCREMENT,FormId TEXT ,FormName TEXT ,NoOfQuestions TEXT ,StartDate TEXT ,EndDate TEXT )",{}).then((data) => {
                    console.log("TABLE CREATED: SurveyForm at time of refresh", data);
                }, (error) => {
                    console.error("Unable to execute sql SurveyForm at time of refresh", error);
                })


               this.sqliteexequery.executeSql("DROP TABLE IF EXISTS SurveyQuestion",{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS SurveyQuestion", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS SurveyQuestion", error);
                })
        this.sqliteexequery.executeSql("CREATE TABLE SurveyQuestion (id INTEGER PRIMARY KEY AUTOINCREMENT,MFormId TEXT ,QuestionId TEXT ,Question TEXT ,Answer TEXT )",{}).then((data) => {
                    console.log("TABLE CREATED: SurveyQuestion at time of refresh", data);
                }, (error) => {
                    console.error("Unable to execute sql SurveyQuestion at time of refresh", error);
                })


                this.sqliteexequery.executeSql("DROP TABLE IF EXISTS  CustomerTypes",{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS CustomerTypes", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS CustomerTypes", error);
                })
        this.sqliteexequery.executeSql("CREATE TABLE CustomerTypes (id INTEGER PRIMARY KEY AUTOINCREMENT,CustomerId TEXT ,CustomerTypes TEXT )",{}).then((data) => {
                    console.log("TABLE CREATED: SurveyQuestion at time of refresh", data);

                    this.navCtrl.setRoot(PharmaMain);
                    console.log("setRoot PharmaMain");
                }, (error) => {
                    console.error("Unable to execute sql SurveyQuestion at time of refresh", error);
                })

    }

>>>>>>> 0e4910a9dca6bf28330389e880288446bfcedf42
}