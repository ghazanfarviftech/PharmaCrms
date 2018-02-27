import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController,ActionSheetController,Platform } from 'ionic-angular';
import { PharmaLogin } from '../pharma-login/pharma-login';
import { AuthService } from '../../providers/auth-service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-pharma-main',
  templateUrl: 'pharma-main.html',
})
export class PharmaMain {

public database: SQLite;
public sqliteexequery: SQLiteObject;

  loginData = { username:'', password:'' };
  data: any;
  newArrsoth : any;
  personList : Array<Object>;

  constructor(public navCtrl: NavController, public authService: AuthService,public actionsheetCtrl: ActionSheetController,public platform: Platform,private sqlite: SQLite) {

 this.platform.ready().then(() => {
          this.splashdata();

        });


  console.log('ionViewDidLoad PharmaMain');
  this.authService.dayView(this.loginData).then((result) => {
      //this.loading.dismiss();
      this.data = result;
      var my= JSON.stringify(this.data);
      var newArr = JSON.parse(my);
      var asd = newArr.d;
       this.newArrsoth = JSON.parse(asd);
		this.dayviewdatatablecreation();
		this.dayviewdatatableinsertion();
		//this.dayviewdatatablegettingdata();
    }, (err) => {
      //this.loading.dismiss();
      //this.presentToast(err);
      console.error("dayview error ", err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PharmaMain');
  }


logout() {
    this.navCtrl.setRoot(PharmaLogin);
  }

   openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  dayviewdatatablecreation()
  {
  this.sqliteexequery.executeSql("DROP TABLE IF EXISTS DailyCallsData",{}).then((data) => {
                    console.log("DROP TABLE IF EXISTS", data);
                }, (error) => {
                    console.error("Unable to execute sql DROP TABLE IF EXISTS", error);
                })
        this.sqliteexequery.executeSql("CREATE TABLE DailyCallsData (id INTEGER PRIMARY KEY AUTOINCREMENT,Date TEXT ,EmpId TEXT ,DocCode TEXT ,DoctorName TEXT ,DoctorID TEXT,Speciality TEXT,Class TEXT,plannerID TEXT,startdate TEXT,enddate TEXT,IsExecuted TEXT,MioDescription TEXT,CallType TEXT,DocArray TEXT )",{}).then((data) => {
                    console.log("TABLE CREATED: DailyCallsData at time of refresh", data);
                }, (error) => {
                    console.error("Unable to execute sql DailyCallsData at time of dayviewdatainsertion", error);
                })
  }

  dayviewdatatableinsertion()
  {

  	/*this.database.executeSql("INSERT INTO people (firstname, lastname) VALUES ('Nic', 'Raboy')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });*/
 
 		for(var i = 0; i < this.newArrsoth.length; i++) {
                    
                
        this.sqliteexequery.executeSql("INSERT INTO DailyCallsData (Date,EmpId,DocCode,DoctorName,DoctorID,Speciality,Class,plannerID,startdate,enddate,IsExecuted,MioDescription,CallType,DocArray)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [this.newArrsoth[i].Date,this.newArrsoth[i].EmpId,this.newArrsoth[i].DocCode,this.newArrsoth[i].DoctorName,this.newArrsoth[i].DoctorID,this.newArrsoth[i].Speciality,this.newArrsoth[i].Class,this.newArrsoth[i].plannerID,this.newArrsoth[i].startdate,this.newArrsoth[i].enddate,this.newArrsoth[i].IsExecuted,this.newArrsoth[i].MioDescription,this.newArrsoth[i].CallType,this.newArrsoth[i].DocArray]).then((data) => {
                    console.log("Inserted data in db", data);
                }, (error) => {
                    console.error("Unable Inserted data in db dayviewdatainsertion", error);
                })

                }


                this.dayviewdatatablegettingdata();
  }



 dayviewdatatablegettingdata()
  {

  	 this.sqliteexequery.executeSql("SELECT * FROM DailyCallsData",[]).then((data) => {

  	 this.personList = [];
            if(data.rows.length > 0) {
                
                for(let i = 0; i < data.rows.length; i++) {
                    this.personList.push({
                        "Date": data.rows.item(i).Date,
                        "EmpId": data.rows.item(i).EmpId,
                        "DocCode": data.rows.item(i).DocCode,
                        "DoctorName": data.rows.item(i).DoctorName,
                        "DoctorID": data.rows.item(i).DoctorID,
                        "Speciality": data.rows.item(i).Speciality,
                        "Class": data.rows.item(i).Class,
                        "plannerID": data.rows.item(i).plannerID,
                        "startdate": data.rows.item(i).startdate,
                        "IsExecuted": data.rows.item(i).IsExecuted,
                        "MioDescription": data.rows.item(i).MioDescription,
                        "CallType": data.rows.item(i).CallType,
                        "DocArray": data.rows.item(i).DocArray
                    });
                }
            }
        }, (error) => {
            console.log("Error in Select Query",error);
        });
  }


  splashdata()
  {
  this.database = new SQLite();
            this.database.create({name: "pharmacrm.db", location: "default"}).then((sqliteexequery: SQLiteObject) => {

            console.log("TABLE CREATED: at time of creating db", sqliteexequery);
                this.sqliteexequery=sqliteexequery;
               
            }, (error) => {
                console.log("ERROR: ", error);
            });
  }


}
