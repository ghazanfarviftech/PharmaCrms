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
import { PharmaMain } from '../pages/pharma-main/pharma-main';
import { PharmaLogout } from '../pages/pharma-logout/pharma-logout';
import { PharmaExecution } from '../pages/pharma-execution/pharma-execution';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../providers/auth-service';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';

import { enableProdMode } from '@angular/core';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
	PharmaLogin,
	PharmaHome,
  PharmaMain,
    ItemDetailsPage,
    ListPage,
    PharmaLogout,
    PharmaExecution
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
  PharmaMain,
    ItemDetailsPage,
    ListPage,
    PharmaLogout,
    PharmaExecution
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	AuthService,
	HttpModule,
	AppPreferences,
	SQLite,
  Camera
  ]
})
export class AppModule {}
