import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopRatedComponent } from './components/top-rated/top-rated.component';

@NgModule( {
  declarations: [ CarouselComponent, TopRatedComponent ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    CarouselComponent,
    TopRatedComponent
  ],
  providers: []
} )

export class SharedModule { }
