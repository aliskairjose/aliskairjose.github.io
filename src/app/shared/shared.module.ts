import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule( {
  declarations: [
    CarouselComponent,
    TopRatedComponent,
    SearchBarComponent,
    MovieCardComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    CarouselComponent,
    TopRatedComponent,
    SearchBarComponent,
    MovieCardComponent
  ],
  providers: [
    NgxSpinnerService
  ]
} )

export class SharedModule { }
