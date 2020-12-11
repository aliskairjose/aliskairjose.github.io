import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  BreakPointRegistry, FlexLayoutModule, FlexStyleBuilder, LayoutAlignStyleBuilder,
  LayoutStyleBuilder, MediaMarshaller, PrintHook, StylesheetMap, StyleUtils, ɵMatchMedia
} from '@angular/flex-layout';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './detail/detail.component';

@NgModule( {
  declarations: [
    HomeComponent,
    DetailComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    NgxSpinnerModule,
    PagesRoutingModule,
    FlexLayoutModule,
    NgbModule,
  ],
  exports: [],
  providers: [
    NgxSpinnerService,
    PrintHook,
    StyleUtils,
    StyleSheet,
    StylesheetMap,
    LayoutAlignStyleBuilder,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry
  ],
  schemas: []
} )
export class PagesModule { }
