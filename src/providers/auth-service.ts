import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import * as xml2js from 'xml2js';
 
 
let apiUrl = 'http://203.92.5.36/icianimalhealth/Webservice/app_login.asmx/';
let apiUrl2 = 'http://203.92.5.36/ICIAHMobileService/SchdulerDayView.asmx/';



export class User {
  userNames: string;
  Passwords: string;
 
  constructor(name: string, email: string) {
    this.userNames = name;
    this.Passwords = email;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
 constructor(public http: Http) {}


/* public login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13');

        let options = new RequestOptions({ headers: headers });

let postParams = {
      EmailAddress: 'ryouellc@tuttocitta.it',
      Password: 'rose123'
    }

      //923013126028,923046278326
        this.http.post('https://chainayena.net/revo/api/revo-employee-login',postParams,options)
          .subscribe(res => {
          console.log("data agaya hit hogai service "+ res.json());
            resolve(res.json());
          }, (err) => {
          console.log("data ni aya "+ err);
            reject(err);
          });
    });
  

  } */

 public login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
			//923013126028,923046278326
        this.http.post(apiUrl+'AllowLoginForPlan',  JSON.stringify({userName: '923013126028',Password: 'abc123'}), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
	

  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
  
   public splashService() {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/xml');
			//923013126028,923046278326
        this.http.get('http://203.92.5.36/ICIAHMobileService/FileService.svc/DownloadFile/18/923013126028/08-10-2017', {headers: headers})
          .subscribe(res => {
			  let data  = res.text();//.json();
			  
			  var parser = new xml2js.Parser();
			var mydata =  parser.parseString(data, function (err, result) {
					//console.log(JSON.stringify(result));
					resolve(result);
					//return result;
			});
             //JSON.parse(xml2json(res.text(),'  '))
          }, (err) => {
            reject(err);
          });
    });
	
	
  }


  public dayView(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(apiUrl2+'GetSchedulerDayView',  JSON.stringify({employeeId: '18',dateTime: '09/22/2017'}), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  

  }

  
}