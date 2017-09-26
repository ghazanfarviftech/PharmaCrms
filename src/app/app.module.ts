import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpModule } from '@angular/http';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { PharmaLogin } from '../pages/pharma-login/pharma-login';
import { PharmaHome } from '../pages/pharma-home/pharma-home';
<<<<<<< HEAD
=======
import { PharmaMain } from '../pages/pharma-main/pharma-main';
>>>>>>> 0e4910a9dca6bf28330389e880288446bfcedf42
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../providers/auth-service';
import { AppPreferences } from '@ionic-native/app-preferences';
import { SQLite } from '@ionic-native/sqlite';

import { enableProdMode } from '@angular/core';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
	PharmaLogin,
	PharmaHome,
<<<<<<< HEAD
=======
  PharmaMain,
>>>>>>> 0e4910a9dca6bf28330389e880288446bfcedf42
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PharmaLogin,
	PharmaHome,
<<<<<<< HEAD
=======
  PharmaMain,
>>>>>>> 0e4910a9dca6bf28330389e880288446bfcedf42
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	AuthService,
	HttpModule,
	AppPreferences,
	SQLite
  ]
})
export class AppModule {}
