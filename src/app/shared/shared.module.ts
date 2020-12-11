import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule( {
  declarations: [ CarouselComponent, TopRatedComponent, SearchBarComponent ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxSpinnerModule,
  ],
  exports: [
    CommonModule,
    CarouselComponent,
    TopRatedComponent,
    SearchBarComponent
  ],
  providers: [
    NgxSpinnerService
  ]
} )

export class SharedModule { }
