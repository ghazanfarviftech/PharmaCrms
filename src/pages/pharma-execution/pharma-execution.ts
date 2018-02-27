import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController, ToastController } from 'ionic-angular';
@Component({
  selector: 'page-pharma-execution',
  templateUrl: 'pharma-execution.html',
})
export class PharmaExecution {

myDate: String = new Date().toISOString();
gender: string ;
mySelect: any;
startTimevalue: string ;
endTimevalue: string ;
customervalue: string ;
povvaluevalue: string ;
starttime: Array<Object>;
endtime: Array<Object>;
customer: Array<Object>;
purpose: Array<Object>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {

  this.starttime = [];
  this.starttime.push({"time":"8:00:00"});
  this.starttime.push({"time":"8:15:00"});
  this.starttime.push({"time":"8:30:00"});
  this.starttime.push({"time":"8:45:00"});

  this.endtime = [];
  this.endtime.push({"time":"8:00:00"});
  this.endtime.push({"time":"8:15:00"});
  this.endtime.push({"time":"8:30:00"});
  this.endtime.push({"time":"8:45:00"});

  this.customer = [];
  this.customer.push({"custname":"2-ALLAH wasaya"});
  this.customer.push({"custname":"4-Asim Gill"});
  this.customer.push({"custname":"3-Ch shabbir"});
  this.customer.push({"custname":"5-Ch taj"});

    this.purpose = [];
  this.purpose.push({"purposeofmeeting":"New Sales Call"});
  this.purpose.push({"purposeofmeeting":"Follow up Visit"});
  this.purpose.push({"purposeofmeeting":"New Product Demo"});
  this.purpose.push({"purposeofmeeting":"Payment Collection"});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PharmaExecution');
  }

 onChange(mySelect) {
    console.log(mySelect);
    this.startTimevalue =mySelect.time;
	
	}

	 showSelectValueEndTime(mySelect) {
    console.log(mySelect);
    this.endTimevalue =mySelect;
	
	}

	showSelectValueCustomer(mySelect) {
    console.log(mySelect);
    this.customervalue =mySelect;
	
	}
	showSelectValuePov(mySelect) {
    console.log(mySelect);
    this.povvaluevalue =mySelect;
	
	}

	submit() {
   let toast = this.toastCtrl.create({
      message: 'StartTime is '+this.startTimevalue+" and End Time is "+this.endTimevalue+" and Customer Selected is " + this.customervalue + " and pov is "+this.povvaluevalue,
      duration: 3000
    });
    toast.present();
  }


}
