import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { JoblistingComponent } from './components/joblisting/joblisting.component';
import { JobpostComponent } from './components/jobpost/jobpost.component';




@NgModule({

declarations: [

 AppComponent,

  LoginComponent,
   JoblistingComponent,
   JobpostComponent

],

imports: [

 BrowserModule,

  AppRoutingModule

 ],

 providers: [],
 bootstrap: [AppComponent]

})

export class AppModule { }