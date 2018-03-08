import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import * as $ from "jquery";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DlDateTimePickerDateModule
  ],
  providers: [FormsModule, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
