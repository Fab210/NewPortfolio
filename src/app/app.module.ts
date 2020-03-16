import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

import { WorkDatePipe } from './pipe/workDate';


@NgModule({
   declarations: [
      AppComponent,
    PortfolioPageComponent,
    WorkDatePipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
     HttpClientModule,
     BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
