import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptor } from './shared/services/http-interceptor.service';

@NgModule( {
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true },
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

} )
export class AppModule { }
