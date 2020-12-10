import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule( {
  declarations: [
    AppComponent,
    PagesComponent,
    SearchBarComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

} )
export class AppModule { }
